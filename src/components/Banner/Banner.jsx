import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Banner = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='my-4 grid gap-5 grid-cols-1 lg:grid-cols-2'>
                <div className="text_content">
                    <h1 className='font-bold text-4xl'>Google Forms Into Interactive Workflows</h1>
                    <p className='text-xl my-2'>BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.</p>
                    <button className="mx-auto block px-4 py-2 rounded border-2 border-[#915bff] text-[#915bff] font-bold bg-[#915bff] text-white my-4"><FontAwesomeIcon icon={faRocket}></FontAwesomeIcon> Install For Free</button>
                </div>
                <div className="video_content">
                    <iframe width="100%" height="400" className='rounded' src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Banner;