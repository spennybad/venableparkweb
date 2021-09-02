// UTILS
import styled from "styled-components";
import DefaultLayout from "../../components/layout/DefaultLayout";

// PDF SPECIFIC IMPORTS
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// TYPES
import { Newsletter } from "../../types/Newsletter";

const NEWSLETTERTILE = styled.li`
    position: relative;
    height: 5rem;
`

export interface Props {
    newsletter: Newsletter;
}

const NewsletterTile: React.FC<Props> = ({ newsletter }) => {
    return (
        <NEWSLETTERTILE>
            <Document file={newsletter.file}>
                <Page pageNumber={1} />
            </Document>
        </NEWSLETTERTILE>
    );
};

export default NewsletterTile;
