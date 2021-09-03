// UTILS
import styled, { css } from "styled-components";

// PDF SPECIFIC IMPORTS
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// TYPES
import { Newsletter } from "../../types/Newsletter";

const NEWSLETTERTILE = styled.li<{ isMostRecent: boolean }>`
    max-width: 300px;
    max-height: 400px;
    overflow-y: hidden;

    box-shadow: ${(props) => props.theme.boxShadow.boxShadowLight};
    background-color: ${(props) => props.theme.colors.white};
    position: relative;
    transition: transform .1s;

    &:hover {
        transform: scale(1.05);
    }

    ${({ isMostRecent }) =>
        (isMostRecent && css`
            &::before {
                content: "NEW";

                background-color: ${(props) => props.theme.colors.primary};
                color: ${(props) => props.theme.colors.white};
                font-size: ${(props) => props.theme.fontSize.p};
                box-shadow: ${(props) => props.theme.boxShadow.boxShadowLight};

                position: absolute;
                bottom: 0;
                right: 0;
                z-index: 1;

                padding: 1rem;
                margin: 1rem;
            }
        `)
    }

    & button {
        appearance: none;
        border: none;
        cursor: pointer;
    }
`

export interface Props {
    newsletter: Newsletter;
    isMostRecent: boolean;
}

const NewsletterTile: React.FC<Props> = ({ newsletter, isMostRecent }) => {
    return (
        <NEWSLETTERTILE isMostRecent={isMostRecent}>
            <button onClick={() => window.open(newsletter.file)}>
                <Document
                    file={newsletter.file}
                >
                    <Page
                        pageNumber={ 1 }
                        width={ 300 }
                    />
                </Document>
            </button>
        </NEWSLETTERTILE>
    );
};

export default NewsletterTile;
