import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Header from './Header';
import Features from './Features';
import AddCoffee from './AddCoffee';
import Section from './Section';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Coffee Master || Home</title>
            </Helmet>
            <Navbar/>
            <Header/>
            <Features/>
            <Section/>
            
        </div>
    );
};

export default Home;