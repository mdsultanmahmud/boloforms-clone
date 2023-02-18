import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Testimonials from '../Testimonials/Testimonials';
import WorkInformation from '../WorkInformation/WorkInformation';
import feedOne from '../../assets/feed1.jpeg'
import feedTwo from '../../assets/feed2.jpeg'
const Home = () => {
    const FirstFeedBackSection = {
        img: feedOne,
        name: 'Repa Mandala'
    }
    const SecondFeedBackSection = {
        img: feedTwo,
        name: 'Alaa Khaled'
    }
    return (
        <div className='px-4'>
            <Navbar></Navbar>
            <Banner></Banner>
            <WorkInformation></WorkInformation>
            <Feedback content = {FirstFeedBackSection}></Feedback>
            <Feature></Feature>
            <Feedback content={SecondFeedBackSection}></Feedback>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;