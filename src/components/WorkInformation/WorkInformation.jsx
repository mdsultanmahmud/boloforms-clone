import React from 'react';
import workOne from '../../assets/work_1.svg'
import workTwo from '../../assets/work_2.svg'
import workThree from '../../assets/work_3.svg'
const WorkInformation = () => {
    return (
        <div className='my-36'>
            <h1 className='text-center text-3xl font-bold'>How does BoloForms work?</h1>
            <p className='text-sm text-center font-semibold'>Set up your first workflow in just 3 easy steps.</p>
            <div className="works-content grid gap-5 grid-cols-1 lg:grid-cols-3 text-center my-3">
                <div>
                    <img src={workOne} className="hover:transform hover:-translate-y-3 transition duration-500" alt="" />
                    <h2 className='font-bold text-2xl text-black'>Step 1:</h2>
                    <p>Choose a template or add questions to create your Google Form.</p>
                </div>
                <div>
                    <img src={workTwo} className="hover:transform hover:-translate-y-3 transition duration-500" alt="" />
                    <h2 className='font-bold text-2xl text-black'>Step 2:</h2>
                    <p>Enable Single/Multi Step approval and add necessary approvers!</p>
                </div>
                <div>
                    <img src={workThree} className="hover:transform hover:-translate-y-3 transition duration-500" alt="" />
                    <h2 className='font-bold text-2xl text-black'>Step 3:</h2>
                    <p>Now you can enable the workflow and share the Google Form.</p>
                </div>
            </div>

        </div>
    );
};

export default WorkInformation;