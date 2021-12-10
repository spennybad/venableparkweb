import { Newsletter } from "../types/Newsletter";
import { AboutPagePDFS } from "../types/AboutPDFS";

const sanityClient = require('@sanity/client');

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: 'production',
    apiVersion: '2021-08-10', // use current UTC date - see "specifying API version"!
    useCdn: false, // `false` if you want to ensure fresh data
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

export async function getOldestNewsletter(): Promise<{oldestNewsletter: Newsletter}> {
    const newsletter = await client.fetch(`
        *[_type == "newsletter"] {
            "date_published": date_published,
            "file": file.asset -> url,
            "title": title,
            "id": _id
        } | order(date_published asc) [0]
    `);
    
    return {
        oldestNewsletter: newsletter
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

export async function getAboutPDFS(): Promise<{
	aboutPagePDFS: AboutPagePDFS;
}> {
	let aboutPagePDFS = await client.fetch(`
        *[_type == "about"] {
            "performance_benchmark_pdf": performance_benchmarks_pdf.asset -> url,
            "philosophy_methods_pdf": philosophy_methods_pdf.asset -> url,
            "results_pdf": results_pdf.asset -> url,
        }
    `);

	return aboutPagePDFS[0];
}

export async function getFeesPDF(): Promise<{
	feesPDF: string;
}> {
	let feesPDF = await client.fetch(`
        *[_type == "fees"] {
            "fees_pdf": fees_pdf.asset -> url
        }
    `);

	return feesPDF[0].fees_pdf;
}