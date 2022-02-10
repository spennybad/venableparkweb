import { Newsletter, PDF } from "../types/Newsletter";

const sanityClient = require('@sanity/client');

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: 'production',
    apiVersion: '2021-08-10', // use current UTC date - see "specifying API version"!
    useCdn: false, // `false` if you want to ensure fresh data
});

export async function getNewsletterFromID(id: string): Promise<Newsletter[]> {
    return await client.fetch(`
        *[
            _type == "newsletter" &&
            _id == "${id}"
        ] {
          "file": file.asset -> url
        }
    `);
}

export async function getNewsletters(): Promise<Newsletter[]> {
     return await client.fetch(`
        *[_type == "newsletter"] {
          "file": file.asset -> url,
          title,
          "id": _id
        }
    `);
}

export async function getNewsletterYears(): Promise<(string[])> {
    const years: string[] = await client.fetch(`
        *[_type == "newsletter"] {
            "date_published": date_published,
            "file": file.asset -> url,
            "title": title,
            "id": _id
        } | order(date_published desc)
    `).then((newsletters: Newsletter[]) => {
        return newsletters.map(newsletter => newsletter.date_published.split("-")[0])
    });
    
    return [...new Set(years)];
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
    const yearNumberPlusOne: number = Number(date) + 1;
    return `${String(yearNumberPlusOne)}-01-01`;
}

const floorDate = (date: string): string => {
    return `${Number(date)}-01-01`
}

export async function getPerformanceBenchmarkPDF(): Promise<PDF> {
	let aboutPagePDF = await client.fetch(`
        *[_type == "about"] {
            "file": performance_benchmarks_pdf.asset -> url
        }
    `);

	return aboutPagePDF[0];
}

export async function getPhilosophyMethodsPDF(): Promise<PDF> {
	let aboutPagePDF = await client.fetch(`
        *[_type == "about"] {
            "file": philosophy_methods_pdf.asset -> url
        }
    `);

	return aboutPagePDF[0];
}

export async function getResultsPDF(): Promise<PDF> {
	let aboutPagePDF = await client.fetch(`
        *[_type == "about"] {
            "file": results_pdf.asset -> url,
        }
    `);

	return aboutPagePDF[0];
}

export async function getFeesPDF(): Promise<PDF> {
	let feesPDF = await client.fetch(`
        *[_type == "fees"] {
            "file": fees_pdf.asset -> url
        }
    `);

	return feesPDF[0];
}

export async function getTestimonials(): Promise<{}> {
    return await client.fetch(`
        *[_type == "testimonial"] {
            "initials": initials,
            "text": text,
            "year_joined": year_joined,
            "id": _id
        }
    `)
}