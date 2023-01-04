import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
// import Login from '../Login/Login';
import Banner from './Banner/Banner';
import Services from '../Home/Servicess/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <About />
            <Contact />
        </div>
    );
};

export default Home;