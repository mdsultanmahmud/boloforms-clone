import React from 'react';
import star from '../../assets/star.png'
import awardOne from '../../assets/award_1.png'
import awardTwo from '../../assets/award_2.png'
import awardThree from '../../assets/award_3.png'
import awardFour from '../../assets/award_4.png'
const AwardWining = () => {
    return (
        <div className='my-12 mx-4 text-black text-center'>
            <div className='text-center text-black'>
                <img src={star} className="h-10 mx-auto " alt="" />
                <h1 className='text-center font-bold text-3xl'>Award-winning support<span className='text-[#915bff] font-bold text-5xl'>.</span> </h1>
                <p className='text-center text-xl'>Best-in-class support. We’re always here to help – here’s how to connect.</p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
                <div className='shadow-lg rounded-xl'>
                    <img src={awardOne} className="w-3/4 mx-auto p-2" alt="" />
                    <h2 className='my-2 font-bold text-2xl'>? Whatsapp chat</h2>  
                    <p className='font-sm font-semibold'>Ask a question right now.</p>    
                    <button className="mx-2 my-4 px-4 py-2 rounded-xl border-2 border-[#915bff] text-[#915bff] font-semibold hover:bg-[#915bff] hover:text-white text-sm">Start a chat</button>          
                </div>
                <div className='shadow-lg rounded-xl'>
                    <img src={awardTwo} className="w-3/4 mx-auto p-2" alt="" />
                    <h2 className='my-2 font-bold text-2xl'>? Email</h2>  
                    <p className='font-sm font-semibold'>Get in touch by email.</p>    
                    <button className="mx-2 my-4 px-4 py-2 rounded-xl border-2 border-[#915bff] text-[#915bff] font-semibold hover:bg-[#915bff] hover:text-white text-sm">Send an email</button>          
                </div>
                <div className='shadow-lg rounded-xl'>
                    <img src={awardThree} className="w-3/4 mx-auto p-2" alt="" />
                    <h2 className='my-2 font-bold text-2xl'>? Help center</h2>  
                    <p className='font-sm font-semibold'>In Depth Guides.</p>    
                    <button className="mx-2 my-4 px-4 py-2 rounded-xl border-2 border-[#915bff] text-[#915bff] font-semibold hover:bg-[#915bff] hover:text-white text-sm">Read articles</button>          
                </div>
                <div className='shadow-lg rounded-xl'>
                    <img src={awardFour} className="w-3/4 mx-auto p-2" alt="" />
                    <h2 className='my-2 font-bold text-2xl'>? Google Meet</h2>  
                    <p className='font-sm font-semibold'>? Google Meet</p>    
                    <button className="mx-2 my-4 px-4 py-2 rounded-xl border-2 border-[#915bff] text-[#915bff] font-semibold hover:bg-[#915bff] hover:text-white text-sm">Book a time</button>          
                </div>

            </div>
        </div>
    );
};

export default AwardWining;