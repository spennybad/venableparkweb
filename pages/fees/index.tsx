// UTILS
import React, { Fragment } from "react";
import Image from "next/image";
import styled from "styled-components";
import media from "../../utils/MediaQueries";

// COMPS
import { H1 } from "../../styles/typography";
import DefaultLayout from "../../components/layout/DefaultLayout";

// TYPES

const FEESWRAPPER = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
`

const FEESCONTENT = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    place-items: center;
    font-size: ${(props) => props.theme.fontSize.p};

    ${media.width_700`
        grid-template-columns: 100%;
        grid-template-rows: auto auto 1fr;

        & > * {
            margin: 3rem;
        }

    `}
`

const FEETEXT = styled.ul`
    display: flex;
    width: 100%;
    height: 65%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: max(5vh, 3rem);

    & > li {
        width: 75%;
    }

    ${media.width_700`
        gap: 1.5rem;
    `}

`

const TABLE = styled.table`
    width: 80%;
    height: 80%;

    & thead + tbody > tr > * {
        padding: 1rem;
    }
    
    & thead tr th {
        & :first-child {
                text-align: start;
        }
    }

    & tbody > tr td :last-child {
            text-align: center;
            color: ${(props) => props.theme.colors.primary};
    }

    & tbody tr :last-child {
        font-size: calc(${(props) => props.theme.fontSize.p} - .2rem);
    }

`

const DIVIDER = styled.div`
    height: 100%;
    width: 1px;
    background-color: ${(props) => props.theme.colors.blackTrans50};

    ${media.width_700`
        height: 1px;
        width: 80%;
        margin-block: 3rem;
    `}
`

export interface Props { }

const feeText: string[] = [
    "Our fee level is based on the aggregate market value of each client's related accounts and is charged quarterly in arrears.",
    "The annual fee that we charge on your money in non-registered accounts can be tax deducted and is in addition to a .10% per annum fee charged to client accounts by the broker/custodian.",
    "We use a major charter bank as our back office, account custodian and broker.  All assets under management are individual segregated accounts held in client name."
]

const Home: React.FC<Props> = () => {
    return (
        <DefaultLayout>
            <FEESWRAPPER>
                <H1>Fees For Our Service</H1>
                <FEESCONTENT>
                    <TABLE>
                        <thead>
                            <tr>
                                <th>Asset Size</th>
                                <th>Annual Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10 Million +</td>
                                <td>0.50%</td>
                            </tr>
                            <tr>
                                <td>5 Million - 9,999,999</td>
                                <td>0.65%</td>
                            </tr>
                            <tr>
                                <td>2 Million - 4,999,999</td>
                                <td>0.75%</td>
                            </tr>
                            <tr>
                                <td>1 Million</td>
                                <td>1%</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>**Minimum Asset Size $1,000,000</td>
                            </tr>
                        </tbody>
                    </TABLE>
                    <DIVIDER />
                    <FEETEXT>
                        {feeText.map((text, index) => (
                            <li key={index}><p>{ text }</p></li>
                        ))}
                    </FEETEXT>
                </FEESCONTENT>
            </FEESWRAPPER>
        </DefaultLayout>
    )
};

export default Home;
