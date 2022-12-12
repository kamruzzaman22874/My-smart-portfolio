import React from 'react';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Hireme from './Hireme';
import Project from './Project';
import Skills from './Skills';
// import Navbar from './shared/Navbar';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Hireme></Hireme>
            {/* <Contact></Contact> */}
        </div>
    );
};

export default Home;