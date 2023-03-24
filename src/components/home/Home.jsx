import React from 'react';
import Topbar from '../topbar/Topbar';
import Intro from '../intro/Intro';
import Experience from '../experience/Experience';
import Testimonials from '../testimonials/Testimonials';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

const Home = () => {
  return (
    <>
        <Topbar />
        <Intro />
        <Experience />
        <Testimonials />
        <Portfolio />
        <Contact />
    </>
  );
};

export default Home;
