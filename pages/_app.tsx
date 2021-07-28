import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../theme/globalStyles";
import theme from "../theme/theme";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
