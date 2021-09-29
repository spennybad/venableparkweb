import styled from "styled-components";
import media from "../../utils/MediaQueries";

import { H2 } from "../../styles/typography";
import { CONTENTWRAPPER } from "../../styles/contentWrapper";

const MISSIONWRAPPER = styled(CONTENTWRAPPER)`
    height: 100%;
    width: 100%;

    display: grid;
    grid-auto-rows: auto;
    gap: 10rem;

    ${media.width_800`
        gap: 5rem;
    `}
`;

const MISSIONCONTENT = styled.div`
    display: grid;
    gap: 5rem;
    width: 100%;
    & p {
        font-size: ${(props) => props.theme.fontSize.p};
        justify-self: center;
        padding-inline: 5vw;
        text-align: center;
    }
`;

type Props = {};

const Mission: React.FC<Props> = () => {
    return (
        <MISSIONWRAPPER>
            <MISSIONCONTENT>
                <H2>Our Mission</H2>
                <p>
                    At Venable Park, we have developed a disciplined, unbiased set of rules regarding adding, removing, or leaving capital invested in a particular asset class or market. We have created these rules to reduce the persuasion and noise of subjective factors such as opinion, groupthink, fear, and greed.  Our primary focus is on minimizing volatility and the risk of loss.  We have learned that if we can do this well, capital has the best odds of serving the needs and goals of its owners.
                    <br />
                    Our service includes a full financial review and retirement projection, updated as needed to reflect changing needs and life circumstances.
                </p>
            </MISSIONCONTENT>
        </MISSIONWRAPPER>
    );
};

export default Mission;
