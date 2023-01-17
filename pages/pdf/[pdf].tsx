// UTILS
import React, { useEffect } from "react";
import {
	getNewsletters,
	getNewsletterFromID,
	getPerformanceBenchmarkPDF,
	getResultsPDF,
	getPhilosophyMethodsPDF,
	getFeesPDF
} from "../../api/sanity";
import styled from "styled-components";

// TYPES
import { Newsletter } from "../../types/Newsletter";

import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFWRAPPER = styled.div`
	height: 100vh;
`

const generalPDFS = [
	"fees",
	"performance-and-benchmarks",
	"philosophy-and-methods",
	"results"
];

type PDFParm = {
	params: {
		pdf: string;
	}
}

export const getStaticPaths = async () => {
	const newsletters = await getNewsletters();

	let paths = newsletters.reduce<PDFParm[]>((previousValues: PDFParm[], newsletter: Newsletter) => {
		return newsletter.file ? [...previousValues, {
			params: {
				pdf: newsletter.id,
			},
		}] : previousValues

	}, []);

	paths = paths.concat(
		generalPDFS.map(pdf => {
			return {
				params: {
					pdf: pdf
				},
			}
		})
	);

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps = async ({ params }: any) => {
	let res: any = {};

	if (generalPDFS.includes(params.pdf)) {

		switch (params.pdf) {
			case "fees":
				res = await getFeesPDF();
				break;
			case "performance-and-benchmarks":
				res = await getPerformanceBenchmarkPDF();
				break;
			case "philosophy-and-methods":
				res = await getPhilosophyMethodsPDF();
				break;
			case "results":
				res = await getResultsPDF();
				break;
		}
	} else {
		res = (await getNewsletterFromID(params.pdf))[0];
	}

	const url = res ? res.file : "";

	return {
		props: url ? {
			url
		} : null
	};
};

export interface Props {
	url: string
}

const NewsletterPage: React.FC<Props> = ({ url }) => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	// Super hacky but it works.
	useEffect(() => {
		const nav = document.querySelector("nav");
		const footer = document.querySelector("footer");
		if (nav && footer) {
			nav.remove();
			footer.remove();
		}
	}, [])

	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.3.200/build/pdf.worker.min.js">
			<PDFWRAPPER>
				<Viewer
					fileUrl={url}
					plugins={[defaultLayoutPluginInstance]}
					defaultScale={SpecialZoomLevel.PageFit}
					theme={"dark"}
				/>
			</PDFWRAPPER>
		</Worker>
	);
};

export default NewsletterPage;
