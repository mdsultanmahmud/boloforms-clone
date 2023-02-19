import React from 'react';
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/slider1.svg'
import slider2 from '../../assets/slider2.svg'
import slider3 from '../../assets/slider3.svg'
import slider4 from '../../assets/slider4.svg'
import slider5 from '../../assets/slider5.svg'

const BoloFormSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
    };
    return (
        <div className='my-20 w-4/5 mx-auto p-3'>
            <h1 className='text-center font-bold text-black text-3xl'>BoloForms Is Used By</h1>
            <Slider {...settings}>
                <div>
                    <img className='w-[200px]' src={slider1} alt="" />
                </div>
                <div>
                    <img className='w-[200px]' src={slider2} alt="" />
                </div>
                <div>
                    <img className='w-[200px]' src={slider3} alt="" />
                </div>
                <div>
                    <img className='w-[200px]' src={slider4} alt="" />
                </div>
                <div>
                    <img className='w-[200px]' src={slider5} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default BoloFormSlider;


