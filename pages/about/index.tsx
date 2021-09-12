// UTILS
import React, { Fragment } from "react";
import { client } from "../../api/sanity";
import styled from "styled-components";

// TYPES

export interface Props {

}

const Home: React.FC<Props> = () => {
    return (
        <>
            At Venable Park, we have developed a disciplined, unbiased set of rules regarding adding, removing or leaving capital invested in a particular asset class or market.
            We have created these rules to reduce the persuasion and noise of subjective market factors such as individual opinion, fear and greed.  We have learned that if we focus on controlling the downside, the upside will take care of itself.  We seek to capture the bulk of up-cycle gains while avoiding the majority of down-cycle losses.
        </>
    )
};

export default Home;
