import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../theme/globalStyles";
import theme from "../theme/theme";
import Nav from "../components/nav/Nav";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Nav />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
