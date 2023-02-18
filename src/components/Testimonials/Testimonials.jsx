import React from 'react';
import test from '../../assets/comment.svg'
const Testimonials = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-3xl font-bold text-black'>Customers Who Are Trusting Us! <p className='inline'>&#128151;</p></h1>
            <p className='text-center text-xl'>Customers’ Testimonials</p>
            <img src={test} className="w-[90%] mx-auto mt-4" alt="" />
        </div>
    );
};

export default Testimonials;