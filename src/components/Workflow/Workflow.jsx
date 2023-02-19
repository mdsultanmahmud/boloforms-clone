import React from 'react';
import workflowImg from '../../assets/workflow.svg'
import boloFormImg from '../../assets/boloAppImg.svg'
import './Workflow.css'
const Workflow = () => {
    return (
        <div className='my-12 p-8 border-2 rounded-lg mx-4'>
            <div className='my-4'>
                <h1 className='text-center text-3xl font-bold text-black my-2'>Fully Automated Workflows</h1>
                <p className='text-center text-xl'>No more painful manual approval management and wasting countless hours.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-12 md:w-3/4 md:mx-auto lg:w-full'>
                <div className='workflow-left'>
                    <div className='flex items-center shadow-lg bg-white mb-3 rounded-lg px-4 py-8'>
                        <img src={workflowImg} className="mr-3" alt="" />
                        <p className='text-xl text-gray-500'>Leave Application</p>
                    </div>
                    <div className='flex items-center shadow-lg bg-white mb-3 rounded-lg px-4 py-8'>
                        <img src={workflowImg} className="mr-3" alt="" />
                        <p className='text-xl text-gray-500'>Purchase Order</p>
                    </div>
                    <div className='flex items-center shadow-lg bg-white mb-3 rounded-lg px-4 py-8'>
                        <img src={workflowImg} className="mr-3" alt="" />
                        <p className='text-xl text-gray-500'>Fulfilment</p>
                    </div>
                </div>
                <div className='grid items-center'>
                    <div className='hidden lg:block'><div className="divider"><img src={boloFormImg} className='w-24' alt="" /></div></div>
                    <div className='lg:hidden flex flex-col justify-center items-center'>
                        <span className='block h-[100px] bg-gray-300 w-1'></span>
                        <img src={boloFormImg} className='w-24' alt="" />
                        <span className='block h-[100px] bg-gray-300 w-1'></span>
                    </div>
                </div>
                <div className='workflow-right'>
                    <div className='flex items-center shadow-lg bg-white mb-3 rounded-lg px-4 py-8'>
                        <img src={workflowImg} className="mr-3" alt="" />
                        <p className='text-xl text-gray-500'>Approve</p>
                    </div>
                    <div className='flex items-center shadow-lg bg-white mb-3 rounded-lg px-4 py-8'>
                        <img src={workflowImg} className="mr-3" alt="" />
                        <p className='text-xl text-gray-500'>Reject</p>
                    </div>
                    <div className='flex items-center shadow-lg bg-white mb-3 rounded-lg px-4 py-8'>
                        <img src={workflowImg} className="mr-3" alt="" />
                        <p className='text-xl text-gray-500'>Send Pdf</p>
                    </div>
                </div>
            </div>

            <p className='my-4 text-center text-xl'>BoloForms workflows acts as a glue holding together all your approval processes.</p>
        </div>
    );
};

export default Workflow;