import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div id="home">
            <Banner/>
            <About/>
            <Products/>
        </div>
    );
};

export default Home;