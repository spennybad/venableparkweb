// UTILS
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import media from "../../utils/MediaQueries";
import useWindowDimensions from "../../hooks/WindowDimensions";

// PDF SPECIFIC IMPORTS
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// COMPS
import DefaultLayout from "../../components/layout/DefaultLayout";
import { H1, H2 } from "../../styles/typography";
import LineBreak from "../../components/comps/LineBreak";

// TYPES

const ABOUTPAGEWRAPPER = styled.div`
    position: relative;
    width: 100%;

    display: grid;
    grid-template-rows: auto 1fr;
`

const ABOUTCONTENTWRAPPER = styled.div`
    display: flex;
    flex-flow: column;
    gap: 8rem;

    @media (max-width: 700px) {
        & > :nth-child(3) > :first-child{
            order: 1;
        }
    }

`

const ABOUTH2 = styled(H2)`
    color: ${(props) => props.theme.colors.accent};
`

const ABOUTTILE = styled.div<{order: number}>`
    display: grid;
    gap: 5vw;
    grid-template-columns: ${props => props.order == 1 ? "1fr auto" : "auto 1fr"};
    justify-content: right;
    align-items: center;    
    max-width: 130rem;
    place-self: center;

    @media (max-width: 700px) {
        grid-template-rows: ${props => props.order == 1 ? "1fr auto" : "auto 1fr"};
        grid-template-columns: 100%;
    }

`

const ABOUTTILETEXT = styled.div`
    display: flex;
    flex-flow: column;
    gap: 1rem;
    font-size: ${(props) => props.theme.fontSize.p};

    & div p {
        place-self: center;
    }

`

const ABOUTPDFWRAPPER = styled.div`
    place-self: center;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowLight};

    & button {
        appearance: none;
        background-color: transparent;
        cursor: pointer;
    }
`

const getPDFWidth = (w: number): number => {
    if (w > 1200) {
        return 250;
    } else {
        return 200;
    }
}

export interface Props {

}

const Home: React.FC<Props> = () => {

    const { width } = useWindowDimensions();
    const [pdfWidth, setPdfWidth] = useState<number>(getPDFWidth(width));

    const PDFDir = "/pdfs/Venable_Park_Philosophy_and_Method_2021_09_29.pdf"

    useEffect(() => {
        setPdfWidth(getPDFWidth(width));
    }, [width])

    return (
        <DefaultLayout>
            <ABOUTPAGEWRAPPER>
                <H1>About</H1>
                <ABOUTCONTENTWRAPPER>
                    <ABOUTTILE order={1}>
                        <ABOUTTILETEXT>
                            <ABOUTH2>Methods and Philosophy</ABOUTH2>
                            <p>
                                At Venable Park, we have developed a disciplined, unbiased set of rules regarding adding, removing, or leaving capital invested in a particular asset class or market. We have created these rules to reduce the persuasion and noise of subjective factors such as opinion, groupthink, fear, and greed.  Our primary focus is on minimizing volatility and the risk of loss.  We have learned that if we can do this well, capital has the best odds of serving the needs and goals of its owners.
                                <br />
                                <br />
                                Our service includes a full financial review and retirement projection, updated as needed to reflect changing needs and life circumstances.
                            </p>
                        </ABOUTTILETEXT>
                        <ABOUTPDFWRAPPER>
                            <button onClick={() => window.open(PDFDir)}>
                                <Document
                                    file={PDFDir}
                                    renderMode="canvas"
                                >
                                    <Page pageNumber={1} width={ pdfWidth } />
                                </Document>
                            </button>
                        </ABOUTPDFWRAPPER>
                    </ABOUTTILE>
                    <LineBreak />
                    <ABOUTTILE order={2}>
                        <ABOUTPDFWRAPPER>
                            <button onClick={() => window.open(PDFDir)}>
                                <Document
                                    file={PDFDir}
                                    renderMode="canvas"
                                >
                                    <Page pageNumber={1} width={ pdfWidth } />
                                </Document>
                            </button>
                        </ABOUTPDFWRAPPER>
                        <ABOUTTILETEXT>
                            <ABOUTH2>Results</ABOUTH2>
                            <p>
                                The cumulative compound returns of our Venable Park Absolute Return Strategy (net of fees) vs. both Long Always and Absolute Return Benchmarks (before fees) for a 60% fixed income, 40% equity, $1,000,000+ portfolio, is updated annually and charted here.
                            </p>
                        </ABOUTTILETEXT>
                    </ABOUTTILE>
                </ABOUTCONTENTWRAPPER>
            </ABOUTPAGEWRAPPER>
        </DefaultLayout>
    )
};

export default Home;
