// UTILS
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import media from "../../utils/MediaQueries"
import useWindowDimensions from "../../hooks/WindowDimensions";

// PDF SPECIFIC IMPORTS
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// COMPS
import DefaultLayout from "../../components/layout/DefaultLayout";
import { H1 } from "../../styles/typography";

// TYPES

const ABOUTPAGEWRAPPER = styled.div`
    position: relative;
    width: 100%;

    display: grid;
    grid-template-rows: auto 1fr;
`

const ABOUTCONTENTWRAPPER = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;

    ${media.width_900`
        grid-template-columns: 100%;
        grid-template-rows: 1fr auto auto;

        & > * {
            margin: 3rem;
        }
    `}
`

const ABOUTTEXT = styled.p`
    font-size: ${(props) => props.theme.fontSize.p};
    place-self: center;
    width: 80%;
    align-self: center;
`

const DIVIDER = styled.div`
    height: 100%;
    width: 1px;
    background-color: ${(props) => props.theme.colors.blackTrans50};
    place-self: center;

    ${media.width_900`
        height: 1px;
        width: 80%;
        margin-block: 3rem;
    `}
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
        return 400;
    } else if (w < 1200 && w >= 500) {
        return 300;
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
                    <ABOUTTEXT>
                        At Venable Park, we have developed a disciplined, unbiased set of rules regarding adding, removing, or leaving capital invested in a particular asset class or market. We have created these rules to reduce the persuasion and noise of subjective factors such as opinion, groupthink, fear, and greed.  Our primary focus is on minimizing volatility and the risk of loss.  We have learned that if we can do this well, capital has the best odds of serving the needs and goals of its owners.
                        <br />
                        <br />
                        Our service includes a full financial review and retirement projection, updated as needed to reflect changing needs and life circumstances.
                    </ABOUTTEXT>
                    <DIVIDER />
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
                </ABOUTCONTENTWRAPPER>
            </ABOUTPAGEWRAPPER>
        </DefaultLayout>
    )
};

export default Home;
