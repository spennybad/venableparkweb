// UTILS
import React, { Fragment } from "react";
import { client } from "../../api/sanity";
import styled from "styled-components";
import media from "../../utils/MediaQueries"

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
    gap: 3rem;

    ${media.width_700`
        grid-template-columns: 100%;
        grid-template-rows: repeat(3, auto);

        & > * {
            margin: 3rem;
        }
    `}
`

const ABOUTTEXT = styled.p`
    font-size: ${(props) => props.theme.fontSize.p};
    place-self: center;
    width: 80%;
`

const DIVIDER = styled.div`
    height: 100%;
    width: 1px;
    background-color: ${(props) => props.theme.colors.blackTrans50};
    place-self: center;

    ${media.width_700`
        height: 1px;
        width: 80%;
        margin-block: 3rem;
    `}
`

const ABOUTPDFWRAPPER = styled.div`
    place-self: center;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowLight};
`

export interface Props {

}

const Home: React.FC<Props> = () => {
    return (
        <DefaultLayout>
            <ABOUTPAGEWRAPPER>
                <H1>About</H1>
                <ABOUTCONTENTWRAPPER>
                    <ABOUTTEXT>
                        At Venable Park, we have developed a disciplined, unbiased set of rules regarding adding, removing or leaving capital invested in a particular asset class or market.
                        We have created these rules to reduce the persuasion and noise of subjective market factors such as individual opinion, fear and greed.  We have learned that if we focus on controlling the downside, the upside will take care of itself.  We seek to capture the bulk of up-cycle gains while avoiding the majority of down-cycle losses.
                    </ABOUTTEXT>
                    <DIVIDER />
                    <ABOUTPDFWRAPPER>
                        <Document
                            file="/pdfs/Venable Park Philosophy and Method.pdf"
                            renderMode="canvas"
                        >
                            <Page pageNumber={1} width={300} />
                        </Document>
                    </ABOUTPDFWRAPPER>
                </ABOUTCONTENTWRAPPER>
            </ABOUTPAGEWRAPPER>
        </DefaultLayout>
    )
};

export default Home;
