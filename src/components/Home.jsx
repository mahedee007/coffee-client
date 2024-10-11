import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Header from './Header';
import Features from './Features';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Coffee Master || Home</title>
            </Helmet>
            <Navbar/>
            <Header/>
            <Features/>
        </div>
    );
};

export default Home;