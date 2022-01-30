// UTILS
import React, { Fragment } from "react";
import { getTestimonials } from "../api/sanity";
import styled from "styled-components";

// COMPONENTS
import Hero from '../components/home/Hero';
import Mission from "../components/home/Mission";
import Testimonials from "../components/home/Testimonials";
import { CONTENTWRAPPER } from "../styles/contentWrapper";
import LineBreak from "../components/comps/LineBreak";

// TYPES
import { Testimonial } from '../types/Testimonial';

const MISSIONSTATMENT = styled.p`
    font-size: ${(props) => props.theme.fontSize.h3};
    color: ${(props) => props.theme.colors.primary};
    justify-self: center;
    text-align: center;
`;

export async function getStaticProps() {
    const testimonials = await getTestimonials();
    
    return {
        props: {
            testimonials,
        },
        revalidate: 1,
    };
}

export interface Props {
    testimonials: Array<Testimonial>
}

const Home: React.FC<Props> = ({ testimonials }) => {
    return (
        <>
            <Hero />
            <CONTENTWRAPPER><MISSIONSTATMENT>Absolute return strategies that achieve goals<br />with a fraction of the risk.</MISSIONSTATMENT></CONTENTWRAPPER>
            <LineBreak />
            <Mission />
            <Testimonials testimonials={ testimonials } />
        </>
    )
};

export default Home;
