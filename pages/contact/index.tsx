// UTILS
import React, { Fragment } from "react";
import styled from "styled-components";

// COMPS
import DefaultLayout from "../../components/layout/DefaultLayout";
import MailForm from "../../components/contact/MailForm";
import { H2 } from "../../styles/typography";

export interface Props {}

const CONTACTPAGEWRAPPER = styled.div`
    height: 100%;
    width: 100%;
`;

const CONTENTWRAPPER = styled.div`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
`;

const CONTACTINFORMATION = styled.div`
    font-size: ${(props) => props.theme.fontSize.p};
    & h4 {
        font-size: ${(props) => props.theme.fontSize.h4};
    }
`;

const Contact: React.FC<Props> = () => {
    return (
        <DefaultLayout>
            <CONTACTPAGEWRAPPER>
                <H2>Contact Us</H2>
                <CONTENTWRAPPER>
                    <MailForm />
                    <CONTACTINFORMATION>
                        <h4>Our Mailing Address</h4>
                        <p>
                            Venable Park Investment Counsel Inc.<br /> 33 Clapperton St.<br /> Barrie ON L4M 3E6
                        </p>
                        Tel: (705) 792-3991
                        Toll Free (866) 792-3991
                        Fax: (705) 792-3992
                    </CONTACTINFORMATION>
                </CONTENTWRAPPER>
            </CONTACTPAGEWRAPPER>
        </DefaultLayout>
    );
};

export default Contact;
