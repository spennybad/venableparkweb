// UTILS
import React from "react";
import { getNewsletters, getNewsletterFromID } from "../../../api/sanity";
import styled from "styled-components";

// TYPES
import { Newsletter } from "../../../types/Newsletter";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFWRAPPER = styled.div`
	height: 100vh;
`

export const getStaticPaths = async () => {
	const newsletters = await getNewsletters();

	const paths = newsletters.map((newsletter: Newsletter) => {
		return {
			params: {
				pdf: newsletter.id,
			},
		};
	});

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps = async ({params}: any) => {
	const res: Newsletter[] = await getNewsletterFromID(params.pdf);
	const url = res[0] ? res[0].file : "";

	return {
		props: {
			url
		}
	};
};

export interface Props {
	url: string
}

const NewsletterPage: React.FC<Props> = ({ url }) => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.3.200/build/pdf.worker.min.js">
			<PDFWRAPPER>
				<Viewer
					fileUrl={url}
					plugins={[defaultLayoutPluginInstance]}
					defaultScale={1}
					theme={"dark"}
				/>
			</PDFWRAPPER>
		</Worker>
	);
};

export default NewsletterPage;
