import React from "react";
import styled from "styled-components";
import media from "../../utils/MediaQueries";

// COMPS
import DefaultLayout from "../../components/layout/DefaultLayout";
import MailForm from "../../components/contact/MailForm.jsx";
import { H2 } from "../../styles/typography";

const CONTACTPAGEWRAPPER = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
`;

const CONTACTCONTENT = styled.div`
    display: grid;

    & > :last-child {
        ${media.width_900`
            display: none;
        `}
    }

    ${media.width_900`
        grid-template-columns: 100%;
        grid-template-rows: 80vh auto 1fr;
    `}
`

const ContactPage: React.FC = () => {
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

export default ContactPage;