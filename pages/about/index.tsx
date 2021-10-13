// UTILS
import styled from "styled-components";
import media from "../../utils/MediaQueries";

// COMPS
import DefaultLayout from "../../components/layout/DefaultLayout";
import { H1, H2 } from "../../styles/typography";
import LineBreak from "../../components/comps/LineBreak";
import Image from "next/image";

const ABOUTPAGEWRAPPER = styled.div`
    position: relative;
    width: 100%;

    display: grid;
    grid-template-rows: auto 1fr;
    margin-block: 5vw;
`

const ABOUTCONTENTWRAPPER = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;

    & > * {
        margin-top: 6rem;
    }
`

const ABOUTH2 = styled(H2)`
    color: ${(props) => props.theme.colors.accent};
`

const ABOUTTILE = styled.div`
    display: grid;
    gap: 5vw;

    width: 100%;
    max-width: 130rem;
    place-self: center;
`

const ABOUTTILETEXT = styled.div`
    display: flex;
    flex-flow: column;
    gap: 3rem;
    font-size: ${(props) => props.theme.fontSize.p};

    & p a {
        color: ${(props) => props.theme.colors.primary};
        transition: all .2s;
        display: inline-block;

        &:hover {
            transform: scale(1.05);
        }
    }

`

const READMOREBUTTON = styled.a`
    cursor: pointer;
    width: max-content;
    padding: 1rem;
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.p};
    background-color: ${(props) => props.theme.colors.white};
    justify-self: right;
    transition: all .2s;
    margin-top: -1.5rem;
    margin-right: 5rem;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
    }

    ${media.width_600`
        justify-self: center;
        margin-right: 0;
    `}
`

const EMOTIONALCHART = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
`

export interface Props {

}

const Home: React.FC<Props> = () => {
    return (
        <DefaultLayout>
            <ABOUTPAGEWRAPPER>
                <H1>About</H1>
                <ABOUTCONTENTWRAPPER>
                    <ABOUTTILE>
                        <ABOUTTILETEXT>
                            <ABOUTH2>Methods and Philosophy</ABOUTH2>
                            <p>
                                At Venable Park, we have developed a disciplined, unbiased set of rules regarding adding, removing, or leaving capital invested in a particular asset class or market. We have created these rules to reduce the persuasion and noise of subjective factors such as opinion, groupthink, fear, and greed.  Our primary focus is on minimizing volatility and the risk of loss.  We have learned that if we can do this well, capital has the best odds of serving the needs and goals of its owners.
                                <br />
                                <br />
                                Our service includes a full financial review and retirement projection, updated as needed to reflect changing needs and life circumstances.
                            </p>
                        </ABOUTTILETEXT>
                        <READMOREBUTTON 
                            href={"/pdfs/Venable_Park_Philosophy_and_Method_2021_09_29.pdf"} 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Read More...
                        </READMOREBUTTON>
                    </ABOUTTILE>
                    <LineBreak />
                    <ABOUTTILE>
                        <ABOUTTILETEXT>
                            <ABOUTH2>Results</ABOUTH2>
                            <p>
                                The cumulative compound returns of our Venable Park Absolute Return Strategy (net of fees) vs. both Long Always and Absolute Return Benchmarks (before fees) for a 60% fixed income, 40% equity, $1,000,000+ portfolio, is updated annually and charted&nbsp;
                                <a 
                                    href={"/pdfs/Results_Chart.pdf"}
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    here
                                </a>.
                                <br />
                                <br />
                                Read about Absolute Return Benchmarks&nbsp;
                                <a 
                                    href={"/pdfs/A Word of Benchmarks.pdf"}
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    here
                                </a>.
                            </p>
                        </ABOUTTILETEXT>
                    </ABOUTTILE>
                    <LineBreak />
                    <ABOUTTILE>
                        <ABOUTTILETEXT>
                            <ABOUTH2>The Emotional Cycle</ABOUTH2>
                        </ABOUTTILETEXT>
                        <a 
                            href={"/images/Investor-behaviour-chart.png"}
                            target="_blank" 
                            rel="noreferrer"
                            >
                            <EMOTIONALCHART>
                                <Image
                                    src={"/images/Investor-behaviour-chart.png"}
                                    layout={"responsive"}
                                    alt="Investors Emotional Cycle Chart."
                                    width={16}
                                    height={9}
                                />
                            </EMOTIONALCHART>
                        </a>
                    </ABOUTTILE>
                </ABOUTCONTENTWRAPPER>
            </ABOUTPAGEWRAPPER>
        </DefaultLayout>
    )
};

export default Home;
