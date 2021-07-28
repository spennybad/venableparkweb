import React, { Fragment } from "react";
import styled from 'styled-components';

import PageWrapper from "../components/wrappers/PageWrapper";
import Hero from '../components/home/Hero';
import Nav from "../components/nav/Nav";
import Mission from "../components/home/Mission";

const SiteWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`

const Home: React.FC = () => {
    return (
        <SiteWrapper>
            <Nav />
            <PageWrapper>
                <Hero />
                <Mission />
            </PageWrapper>
        </SiteWrapper>
    )
};

export default Home;
