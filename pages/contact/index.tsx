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

const CONTACTINFORMATION = styled.address`
    height: max-content;
    place-self: center;

    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 20%;

    font-size: ${(props) => props.theme.fontSize.p};
    font-style: normal;

    & h4 {
        font-size: ${(props) => props.theme.fontSize.h4};
    }
`;

const MAILINGADDRESS = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 5%;
    text-align: center;
`

const CONTACTNUMBERS = styled.div`
    text-align: center;
`

const Contact: React.FC<Props> = () => {
    return (
        <DefaultLayout>
                <H2>Contact Us</H2>
                <CONTENTWRAPPER>
                    <MailForm />
                    <CONTACTINFORMATION>
                        <MAILINGADDRESS>
                            <p>
                                Venable Park Investment<br />Counsel Inc.<br /><br /> 33 Clapperton St.<br /> Barrie ON L4M 3E6
                            </p>
                        </MAILINGADDRESS>
            
                        <CONTACTNUMBERS>
                            <p>Telephone: <a href="tel:(705) 792-3991">(705) 792-3991</a></p>
                            <p>Toll Free: <a href="tel:(866) 792-3991">(866) 792-3991</a></p>
                            <p>Fax: <a href="fax:(705) 792-3992">(866) 792-3991</a></p>
                        </CONTACTNUMBERS>
                    </CONTACTINFORMATION>
                </CONTENTWRAPPER>
        </DefaultLayout>
    );
};

export default Contact;
