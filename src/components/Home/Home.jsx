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
import Rating from '../Rating/Rating';
import ratOne from '../../assets/rating1.jpeg'
import ratTwo from '../../assets/rating2.jpeg'
import FAQ from '../FAQ/FAQ';
import AwardWining from '../AwardWining/AwardWining';
import Certification from '../Certification/Certification';
const Home = () => {
    const FirstFeedBackSection = {
        img: feedOne,
        name: 'Repa Mandala'
    }
    const SecondFeedBackSection = {
        img: feedTwo,
        name: 'Alaa Khaled'
    }
    const FirstRatingSec = {
        img: ratOne,
        name: 'Deepak S (Solero Corporation)',
        text: "Easy to use interface and timely support...looking for more features"
    }
    const SecondRatingSec = {
        img: ratTwo,
        name: 'John M.',
        text: "Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member's request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine."
    }
    return (
        <div className='px-4'>
            <Navbar></Navbar>
            <Banner></Banner>
            <WorkInformation></WorkInformation>
            <Feedback content = {FirstFeedBackSection}></Feedback>
            <Feature></Feature>
            <Feedback content={SecondFeedBackSection}></Feedback>
            <Rating content = {FirstRatingSec}></Rating>
            <Certification></Certification>
            <AwardWining></AwardWining>
            <FAQ></FAQ>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;