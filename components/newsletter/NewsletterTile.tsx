// UTILS
import styled, { css } from "styled-components";

// PDF SPECIFIC IMPORTS
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import Link from 'next/link';

// TYPES
import { Newsletter } from "../../types/Newsletter";

const NEWSLETTERTILE = styled.li<{ isMostRecent: boolean }>`
    width: 250px;
    height: 350px;
    overflow-y: hidden;

    box-shadow: ${(props) => props.theme.boxShadow.boxShadowLight};
    background-color: ${(props) => props.theme.colors.white};
    position: relative;
    transition: transform 0.1s;

    position: relative;

    &:hover {
        transform: scale(1.05);
    }

    ${({ isMostRecent }) =>
        isMostRecent &&
        css`
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
    `}

    & button {
        appearance: none;
        border: none;
        cursor: pointer;
    }
`;

export interface Props {
    newsletter: Newsletter;
    isMostRecent: boolean;
    handleNewsletterLoad: () => void;
}

const NewsletterTile: React.FC<Props> = ({ newsletter, isMostRecent, handleNewsletterLoad}) => {
    return (
		<NEWSLETTERTILE isMostRecent={isMostRecent}>
			<Link href={`/pdf/${newsletter.id}`}>
				<a target="_blank">
					<Document
						file={newsletter.file}
						onLoadSuccess={() => handleNewsletterLoad()}
					>
						<Page pageNumber={1} width={250} />
					</Document>
				</a>
			</Link>
		</NEWSLETTERTILE>
	);
};

export default NewsletterTile;
