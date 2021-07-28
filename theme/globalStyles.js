import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

        // Used to see if something is cliping over screen bounds.
        /* border: 1px solid #f00 !important; */
    }

    html {
        font-size: 62.5%; // Makes it so 1rem is equivalent to 10px.
    }

`

export default GlobalStyle;