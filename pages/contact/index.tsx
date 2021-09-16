// UTILS
import React, { Fragment } from "react";
import styled from "styled-components";
import media from "../../utils/MediaQueries";

// COMPS
import DefaultLayout from "../../components/layout/DefaultLayout";
import MailForm from "../../components/contact/MailForm";
import { H2 } from "../../styles/typography";

export interface Props {}

const CONTACTPAGEWRAPPER = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;

`;

const CONTACTCONTENT = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${media.width_900`
        grid-template-columns: 100%;
        grid-template-rows: repeat(2, 1fr);
    `}
`

const Contact: React.FC<Props> = () => {
    return (
        <DefaultLayout>
            <CONTACTPAGEWRAPPER>
                <H2>Contact Us</H2>
                <CONTACTCONTENT>
                    <MailForm />
                </CONTACTCONTENT>
            </CONTACTPAGEWRAPPER>
        </DefaultLayout>
    );
};

export default Contact;
