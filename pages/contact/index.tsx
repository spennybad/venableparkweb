// UTILS
import React, { Fragment } from "react";
import styled from "styled-components";
import media from "../../utils/MediaQueries";

// COMPS
import DefaultLayout from "../../components/layout/DefaultLayout";
import MailForm from "../../components/contact/MailForm";
import { H2 } from "../../styles/typography";
import Map from "../../components/contact/Map";

const CONTACTPAGEWRAPPER = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;

`;

const CONTACTCONTENT = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;

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

const DIVIDER = styled.div`
    height: 100%;
    width: 1px;
    background-color: ${(props) => props.theme.colors.blackTrans50};
    justify-self: center;

    ${media.width_900`
        display: none;
    `}
`

export interface Props {}

const Contact: React.FC<Props> = () => {
    return (
        <DefaultLayout>
            <CONTACTPAGEWRAPPER>
                <H2>Contact Us</H2>
                <CONTACTCONTENT>
                    <MailForm />
                    <DIVIDER />
                    <Map />
                </CONTACTCONTENT>
            </CONTACTPAGEWRAPPER>
        </DefaultLayout>
    );
};

export default Contact;
