// UTILS
import React, { Fragment } from "react";
import styled from "styled-components";
import media from "../../utils/MediaQueries";

// COMPS
import DefaultLayout from "../../components/layout/DefaultLayout";
import MailForm from "../../components/contact/MailForm";
import { H2 } from "../../styles/typography";

export interface Props {}

const CONTENTWRAPPER = styled.div`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${media.width_900`
        grid-template-columns: 100%;
        grid-template-rows: repeat(2, 1fr);
    `}
`;

const Contact: React.FC<Props> = () => {
    return (
        <DefaultLayout>
                <H2>Contact Us</H2>
                <CONTENTWRAPPER>
                    <MailForm />

                </CONTENTWRAPPER>
        </DefaultLayout>
    );
};

export default Contact;
