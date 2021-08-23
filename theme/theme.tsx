const theme = {
    colors: {
        // Solid Colors
        black: 'hsla(0, 0%, 0%, 1)',
        white: 'hsla(0, 0%, 100%, 1)',
        primary: "#17604C",
        accent: "#C28D5D",
        
        // Transparent Colors
        whiteTrans75: "hsla(0, 0%, 100%, .75)",
        blackTrans75: "hsla(0, 0%, 0%, .75)",
        blackTrans50: "hsla(0, 0%, 0%, .50)"

    },
    
    fontSize: {
        // Default
        h1: "clamp(2.3rem, 4vw, 6.1rem)",
        h2: "clamp(2rem, 3vw, 4.8rem)",
        h3: "clamp(1.8rem, 2.5vw, 3.1rem)",
        h4: "clamp(1.6rem, 2.2vw, 2.5rem)",
        p: "clamp(1.4rem, 1.5vw, 2rem)"
    },

    boxShadow: {
        boxShadowDefault: ".2rem .2rem 1rem .1rem rgba(0,0,0,0.50);",
        boxShadowLight: ".2rem .2rem 1rem .1rem rgba(0,0,0,0.25);"
    }
}

export default theme;