import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import WorkInformation from '../WorkInformation/WorkInformation';

const Home = () => {
    return (
        <div className='px-4'>
            <Navbar></Navbar>
            <Banner></Banner>
            <WorkInformation></WorkInformation>
        </div>
    );
};

export default Home;