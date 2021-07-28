import styled from "styled-components";

import { H2 } from "../../styles/typography";
import { CONTENTWRAPPER } from "../../styles/contentWrapper";

const MISSIONWRAPPER = styled(CONTENTWRAPPER)`
    height: 100%;
    width: 100%;

    display: grid;
    grid-auto-rows: auto;
`

const MISSIONSTATMENT = styled.p`
    font-size: calc(${(props) => props.theme.fontSize.p} + 1rem);
    color: ${(props) => props.theme.colors.primary};
    justify-self: center;
    text-align: center;
    padding: 10rem 0rem;
`

const MISSIONCONTENT = styled.div`
    padding: 10rem 0;
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
                <p>

                </p>
                <ul>

                </ul>
            </MISSIONCONTENT>
        </MISSIONWRAPPER>
    );
}
 
export default Mission;