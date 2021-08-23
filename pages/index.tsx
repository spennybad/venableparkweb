// UTILS
import React, { Fragment } from "react";
import { client } from "../api/sanity";

// COMPONENTS
import Hero from '../components/home/Hero';
import Mission from "../components/home/Mission";
import Testimonials from "../components/home/Testimonials";

// TYPES
import { Testimonial } from '../types/Testimonial';

export async function getStaticProps() {
    const testimonials = await client.fetch(`
        *[_type == "testimonials"] {
            "initials": initials,
            "text": text,
            "year_joined": year_joined,
            "id": _id
        }
    `);
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
            <Mission />
            <Testimonials testimonials={ testimonials } />
        </>
    )
};

export default Home;
