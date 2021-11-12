import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';


const Home = () => {
    return (
        <div id="home">
            <Header/>
            <Banner/>
            <About/>
            <Products/>
            <Footer/>
        </div>
    );
};

export default Home;