// UTILS
import React, { Fragment } from "react";
import Image from "next/image";
import styled from "styled-components";
import media from "../../utils/MediaQueries";

// COMPS
import { H2 } from "../../styles/typography";
import DefaultLayout from "../../components/layout/DefaultLayout";

// TYPES

const FEESWRAPPER = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
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
    
    & > tr th {
        text-align: start;
        text-decoration: underline;
        font-size: ${(props) => props.theme.fontSize.p};
        white-space: nowrap;
    }

    & > tr td {
        padding: 1rem;
    }

    & > tr > :last-child {
        text-align: center;

        &:not(th){
            color: ${(props) => props.theme.colors.primary};
        }
    }

    & > :last-child > td {
        font-size: calc(${(props) => props.theme.fontSize.p} - .25rem);
        text-align: start;
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

const STYLEDIMAGE = styled(Image)`
    object-fit: cover;
    position: absolute;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};
`;

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
                <H2>Fees</H2>
                <FEESCONTENT>
                    <TABLE>
                        <tr>
                            <th>Asset Size</th>
                            <th>Anual Fee</th>
                        </tr>
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
                            <td>0.1%</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>**Minimum Asset Size $1,000,000</td>
                        </tr>
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
