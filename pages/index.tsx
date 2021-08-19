import React, { Fragment } from "react";
import styled from 'styled-components';

import PageWrapper from "../components/wrappers/PageWrapper";
import Hero from '../components/home/Hero';
import Mission from "../components/home/Mission";



const Home: React.FC = () => {
  return (
      <>
        <Hero />
        <Mission />
      </>
    )
};

export default Home;
