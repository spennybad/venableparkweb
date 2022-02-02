import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";


import GlobalStyle from "../theme/globalStyles";
import theme from "../theme/theme";
import Nav from "../components/layout/nav/Nav";
import Footer from "../components/layout/footer";

const SITEWRAPPER = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100%;
`;

export default function App({ Component, pageProps }: AppProps) {
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
