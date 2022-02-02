// UTILS
import styled from "styled-components";
import media from "../../utils/MediaQueries";
import { getAboutPDFS } from "../../api/sanity";

// TYPES
import { AboutPagePDFS } from "../../types/AboutPDFS";

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
    max-width: 100%;
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

    & a {
        margin-top: -3rem;
    }

`

const EMOTIONALCHART = styled.a`
    position: relative;
    width: 60%;
    aspect-ratio: 16/9;
    justify-self: center;
`

export async function getStaticProps() {
	const aboutPDFS = await getAboutPDFS();

	return {
		props: {
			aboutPDFS,
		},
		revalidate: 1,
	};
}

export interface Props {
	aboutPDFS: AboutPagePDFS;
}

const Home: React.FC<Props> = ({ aboutPDFS }) => {
	const {performance_benchmark_pdf, philosophy_methods_pdf, results_pdf} = aboutPDFS;

	return (
		<DefaultLayout>
			<ABOUTPAGEWRAPPER>
				<H1>About</H1>
				<ABOUTCONTENTWRAPPER>
					<ABOUTTILE>
						<ABOUTTILETEXT>
							<ABOUTH2>Philosophy and Method</ABOUTH2>
							<p>
								At Venable Park, we have developed a
								disciplined, unbiased set of rules regarding
								adding, removing, or leaving capital invested in
								a particular asset class or market. We have
								created these rules to reduce the persuasion and
								noise of subjective factors such as opinion,
								groupthink, fear, and greed. Our primary focus
								is on minimizing volatility and the risk of
								loss. We have learned that if we can do this
								well, capital has the best odds of serving the
								needs and goals of its owners.
								<br />
								<br />
								Our service includes a full financial review and
								retirement projection, updated as needed to
								reflect changing needs and life circumstances.
								<br />
								<br />
								You can read more about our philosophy and
								method&nbsp;
								<a
									href={philosophy_methods_pdf}
									target="_blank"
									rel="noreferrer"
								>
									here
								</a>
								.
							</p>
						</ABOUTTILETEXT>
					</ABOUTTILE>
					<ABOUTTILE>
						<ABOUTTILETEXT>
							<ABOUTH2>Results</ABOUTH2>
							<p>
								The cumulative compound returns of our Venable
								Park Absolute Return Strategy (net of fees) vs.
								both Long Always and Absolute Return Benchmarks
								(before fees) for a 60% fixed income, 40%
								equity, $1,000,000+ portfolio, is updated
								annually and charted&nbsp;
								<a
									href={results_pdf}
									target="_blank"
									rel="noreferrer"
								>
									here
								</a>
								.
								<br />
								<br />
								Read more about portfolio performance and
								benchmarks&nbsp;
								<a
									href={performance_benchmark_pdf}
									target="_blank"
									rel="noreferrer"
								>
									here
								</a>
								.
							</p>
						</ABOUTTILETEXT>
					</ABOUTTILE>
					<ABOUTTILE>
						<ABOUTTILETEXT>
							<ABOUTH2>Emotional Cycle of Investing</ABOUTH2>
						</ABOUTTILETEXT>
						<EMOTIONALCHART
							href={"/images/Investor-behaviour-chart.png"}
							target="_blank"
							rel="noreferrer"
						>
							<Image
								src={"/images/Investor-behaviour-chart.png"}
								layout={"responsive"}
								alt="Investors Emotional Cycle Chart."
								width={16}
								height={9}
							/>
						</EMOTIONALCHART>
					</ABOUTTILE>
				</ABOUTCONTENTWRAPPER>
			</ABOUTPAGEWRAPPER>
		</DefaultLayout>
	);
};

export default Home;
