import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Testimonials from '../Testimonials/Testimonials';
import WorkInformation from '../WorkInformation/WorkInformation';

const Home = () => {
    return (
        <div className='px-4'>
            <Navbar></Navbar>
            <Banner></Banner>
            <WorkInformation></WorkInformation>
            <Feature></Feature>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;