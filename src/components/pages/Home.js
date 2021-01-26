import React from 'react';
import '../../App.css';
import Typing from '../Typing';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home () {
    return (
        <>
            <HeroSection />
            <Typing />
            <Footer />
        </>
    );
}

export default Home;