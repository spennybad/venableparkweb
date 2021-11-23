import { Newsletter } from "../types/Newsletter";

const sanityClient = require('@sanity/client');

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: 'production',
    apiVersion: '2021-08-10', // use current UTC date - see "specifying API version"!
    useCdn: true, // `false` if you want to ensure fresh data
});

export async function getMostRecentNewsletter(): Promise<{mostRecentNewsletter: Newsletter}> {
    const newsletter = await client.fetch(`
        *[_type == "newsletter"] {
            "date_published": date_published,
            "file": file.asset -> url,
            "title": title,
            "id": _id
        } | order(date_published desc) [0]
    `);
    
    return {
        mostRecentNewsletter: newsletter
    };
}

export async function getNewslettersOfYear(date: string): Promise<
    {newsletters: Newsletter[]}
> {

    const flooredDate: string = floorDate(date);
    const maxDate: string = addOneYear(date);

    const newsletters = await client.fetch(`
        *[
            _type == "newsletter" &&
            date_published >= "${flooredDate}" &&
            date_published < "${maxDate}"
        ]{
            "date_published": date_published,
            "file": file.asset -> url,
            "title": title,
            "id": _id
        } | order(date_published desc)
    `);
    
    return {
        newsletters: newsletters
    };
}

const addOneYear = (date: string): string => {
    const yearStringArray: string[] = date.split("-");
    const yearNumberPlusOne: number = Number(yearStringArray[0]) + 1;
    return `${String(yearNumberPlusOne)}-${yearStringArray[1]}-${yearStringArray[2]}`;
}

const floorDate = (date: string): string => {
    return `${Number(date.split("-")[0])}-01-01`
}