import { faCheck, faCloudArrowDown, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Feedback = ({ content }) => {
    const { img, name } = content
    return (
        <div className='p-4 my-6'>
            <div className="flex flex-col md:flex-row items-center bg-base-100 text-black shadow-xl px-8 z-0">
                <img src={img} className="rounded-full h-[120px] w-[120px] my-auto" alt="Movie" />
                <div className="card-body">
                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <q>Boloforms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure that everything runs smoothly. I love how it automates tasks and eliminates manual processes, saving me time and effort. It's a great Google Workflow software and is well worth the money!</q>
                    <p className='font-bold text-xl'>{name}</p>
                </div>
            </div>
            <div className='mt-20'>
                <div className='flex flex-wrap gap-10 justify-center mb-4'>
                    <button className="mx-2 px-6 py-3 rounded-xl border-2 border-[#915bff] text-[#915bff] font-bold bg-[#915bff] text-white text-xl hover:opacity-90"><FontAwesomeIcon icon={faCloudArrowDown}></FontAwesomeIcon> Install For Free</button>
                    <button className="mx-2 px-6 py-3 rounded-xl border-2 border-[#915bff] text-[#915bff] font-bold text-xl"><FontAwesomeIcon icon={faRocket}></FontAwesomeIcon> BoloForms Premium</button>
                </div>
                <div className='flex flex-wrap gap-5 items-center lg:justify-evenly px-4'>
                    <p className='text-sm font-bold text-gray-600'><FontAwesomeIcon className='text-[green] font-bold text-xl' icon={faCheck}></FontAwesomeIcon> Trusted by 50000+ Businesses</p>
                    <p className='text-sm font-bold text-gray-600'><FontAwesomeIcon className='text-[green] font-bold text-xl' icon={faCheck}></FontAwesomeIcon> 30 Days Money Back Guarantee</p>
                    <p className='text-sm font-bold text-gray-600'><FontAwesomeIcon className='text-[green] font-bold text-xl' icon={faCheck}></FontAwesomeIcon> 1-1 Zoom & WhatsApp Onboarding</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;