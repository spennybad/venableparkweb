import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import {
    getNewsletterFromID,
    getPerformanceBenchmarkPDF,
    getResultsPDF,
    getPhilosophyMethodsPDF,
    getFeesPDF
} from "../../api/sanity";

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

const PDFPage: React.FC = () => {
    const { pdfId } = useParams<{ pdfId: string }>();
    const [url, setUrl] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        const fetchPDF = async () => {
            if (!pdfId) {
                setError("No PDF ID provided");
                setLoading(false);
                return;
            }

            try {
                let res: any = {};

                if (generalPDFS.includes(pdfId)) {
                    switch (pdfId) {
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
                    const newsletters = await getNewsletterFromID(pdfId);
                    res = newsletters[0];
                }

                const pdfUrl = res ? res.file : "";
                
                if (pdfUrl) {
                    setUrl(pdfUrl);
                } else {
                    setError("PDF not found");
                }
            } catch (error) {
                console.error('Error fetching PDF:', error);
                setError("Error loading PDF");
            } finally {
                setLoading(false);
            }
        };

        fetchPDF();
    }, [pdfId]);

    // Hide nav and footer for PDF view (similar to original)
    useEffect(() => {
        const nav = document.querySelector("nav");
        const footer = document.querySelector("footer");
        
        if (nav && footer) {
            nav.style.display = "none";
            footer.style.display = "none";
        }

        return () => {
            if (nav && footer) {
                nav.style.display = "";
                footer.style.display = "";
            }
        };
    }, []);

    if (loading) {
        return <div>Loading PDF...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!url) {
        return <div>PDF not found</div>;
    }

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

export default PDFPage;