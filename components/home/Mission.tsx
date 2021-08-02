import styled from "styled-components";
import media from "../../utils/MediaQueries";

import { H2 } from "../../styles/typography";
import { CONTENTWRAPPER } from "../../styles/contentWrapper";
import MissionTile from "./MissionTile";

const tileText: string[] = [
    "They should be paid one all inclusive annual fee, which is visible and fair.",
    "Independent, trustworthy and held to the highest ethical standards.",
    "They should not be the recipient of commissions or any other incentives.",
    "They must be accountable to their clients alone.",
    "They must work exclusively under the agenda of the individual client.",
    "They should not be accountable to 'sales targets'"
];

const MISSIONWRAPPER = styled(CONTENTWRAPPER)`
    height: 100%;
    width: 100%;

    display: grid;
    grid-auto-rows: auto;
    gap: 10rem;

    ${media.width_800`
        gap: 5rem;
    `}
`

const MISSIONSTATMENT = styled.p`
    font-size: ${(props) => props.theme.fontSize.h3};
    color: ${(props) => props.theme.colors.primary};
    justify-self: center;
    text-align: center;
`

const MISSIONCONTENT = styled.div`
    display: grid;
    gap: inherit;
    width: 100%;

    & ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        place-items: center;
        justify-self: center;
        width: 70%;

        ${media.width_800`
            grid-template-columns: 1fr;
            width: 90%;
        `}
    }

`

const MISSIONBODYTEXT = styled.p`
    font-size: ${(props) => props.theme.fontSize.h3};
    width: 80%;
    justify-self: center;
    text-align: center;
`

const LINEBREAK = styled.div`
    width: 80%;
    height: .1rem;
    background-color: ${(props) => props.theme.colors.blackTrans75};
    justify-self: center;
`

type Props = {

}
 
const Mission: React.FC<Props> = () => {
    return (
        <MISSIONWRAPPER>
            <MISSIONSTATMENT>
                Absolute return strategies that outperform<br />with a fraction of the risk.
            </MISSIONSTATMENT>
            <LINEBREAK />
            <MISSIONCONTENT>
                <H2>Our Mission</H2>
                <MISSIONBODYTEXT>
                    It is our experience that in order to render truly unbiased, client focused advice, your advisor needs to be a fiduciary;
                </MISSIONBODYTEXT>
                <ul>
                    {
                        tileText.map((text: string, index: number) => {
                            return (
                                <MissionTile key={index}>
                                    {text}
                                </MissionTile>
                            )
                        })
                    }
                </ul>
            </MISSIONCONTENT>
        </MISSIONWRAPPER>
    );
}
 
export default Mission;