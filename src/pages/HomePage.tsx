import React, { useState, useEffect } from "react";
import styled from "styled-components";

// API
import { getTestimonials } from "../../api/sanity";

// COMPONENTS
import Hero from '../../components/home/Hero';
import Mission from "../../components/home/Mission";
import Testimonials from "../../components/home/Testimonials";
import { CONTENTWRAPPER } from "../../styles/contentWrapper";
import LineBreak from "../../components/comps/LineBreak";

// TYPES
import { Testimonial } from '../../types/Testimonial';

const MISSIONSTATMENT = styled.p`
    font-size: ${(props) => props.theme.fontSize.h3};
    color: ${(props) => props.theme.colors.primary};
    justify-self: center;
    text-align: center;
`;

const HomePage: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Array<Testimonial>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const data = await getTestimonials();
                setTestimonials(data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Hero />
            <CONTENTWRAPPER><MISSIONSTATMENT>Absolute return strategies that achieve goals<br />with a fraction of the risk.</MISSIONSTATMENT></CONTENTWRAPPER>
            <LineBreak />
            <Mission />
            <Testimonials testimonials={testimonials} />
        </>
    );
};

export default HomePage;