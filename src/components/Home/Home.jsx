import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className='px-4'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;