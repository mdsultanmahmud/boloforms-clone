import React from 'react';
import certificate from '../../assets/certificate_img.png'
import signature from '../../assets/signature.png'
const Certification = () => {
    return (
        <div className='w-3/4 mx-auto shadow-2xl flex flex-col md:flex-row p-8 gap-8 my-4'>
            <div>
                <img className='w-[100px] lg:w-[70%] lg:mx-auto' src={certificate} alt="" />
            </div>
            <div>
                <h2 className='font-bold text-gray-500 mb-4'>MY 100% NO-RISK DOUBLE-GUARANTEE</h2>
                <h3 className='font-bold text-xl text-black'>If you don’t like BoloForms over the next 30 days, I will happily refund 100% of your purchase. No questions asked.</h3>
                <h4 className='my-4'>Here's why I'm offering this -</h4>
                <p>
                    I have seen the power of automating your business workflows. Take some time out of your busy schedule today and see what all things can be automated in your workflows. <br /> <br />
                    You will find that most of your time is going in doing things that could be done better by automating. You just have to give it a shot! <br /> <br />

                    Start with automating small workflow and then gradually you will love it!! <br /> <br />

                    Thank you, and I hope we'll get the opportunity to be a part of your growth journey soon!
                </p>
                <img src={signature} className="w-2/4 h-[70px] ml-[-20px]  md:ml-[-40px] mb-[-20px]" alt="" />
                <h2 className='font-semibold text-xl text-black'>Paresh Deshmukh</h2>
                <p className='font-semibold text-sm text-black'>Co-Founder BoloForms</p>
            </div>
        </div>
    );
};

export default Certification;