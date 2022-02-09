import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";

import GlobalStyle from "../theme/globalStyles";
import theme from "../theme/theme";
import Nav from "../components/layout/nav/Nav";
import Footer from "../components/layout/footer";

import { pageview } from "../utils/Analytics";


const SITEWRAPPER = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100%;
`;

export default function App({ Component, pageProps }: AppProps) {

	const router = useRouter();
	
	useEffect(() => {
		  const handleRouteChange = (url: URL) => {
			pageview(url);
		};

		console.log("HERE")

		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};

	}, [router.events])

    return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Nav />
				<SITEWRAPPER>
					<Component {...pageProps} />
				</SITEWRAPPER>
				<Footer />
			</ThemeProvider>
		</>
	);
}
