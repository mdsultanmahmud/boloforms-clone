import { faCheck, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WorkflowPlatform.css'
const WorkflowPlatforms = () => {
    return (
        <div className='my-8 p-4 grid gap-5 grid-cols-1 md:grid-cols-2'>
            <div className='button-container'>
                <div className='mb-4 flex gap-2'>
                    <span className='inline-block px-4 py-3 bg-[#f9f1e1] rounded-lg min-w-[100px]'></span>
                    <span className='inline-block px-4 py-3 bg-[#f7dff5] text-[#C72C91] rounded-lg text-sm'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Approval Management</span>
                </div>
                <div className='mb-4 flex gap-2'>
                    <span className='inline-block px-4 py-3 bg-[#DCF5DE] rounded-lg min-w-[170px]'></span>
                    <span className='inline-block px-4 py-3 bg-[#EBF3FF] text-[#0966FF] rounded-lg text-sm'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Sales Quotation Apporval</span>
                </div>
                <div className='mb-4 flex gap-2'>
                    <span className='inline-block px-4 py-3 bg-[#EDECF9] rounded-lg min-w-[100px]'></span>
                    <span className='inline-block px-4 py-3 bg-[#f9f1e1] text-[#F58224] rounded-lg text-sm'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Registration Management</span>
                </div>
                <div className='mb-4 flex gap-2'>
                    <span className='inline-block px-4 py-2 bg-[#ffe7e5] rounded-lg min-w-[160px]'></span>
                    <span className='inline-block px-4 py-2 bg-[#DCF5DE] text-[#60ba63] rounded-lg text-sm'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Performance Appraisal <br /> Request</span>
                </div>
                <div className='mb-4 flex gap-2'>
                    <span className='inline-block px-4 py-2 bg-[#ffe7e5] rounded-lg min-w-[80px]'></span>
                    <span className='inline-block px-4 py-2 bg-[#f7dff5] text-[#C72C91] rounded-lg text-sm'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Qualify Sales <br /> Leads</span>
                    <span className='inline-block px-4 py-2 bg-[#EDECF9] text-[#7E7EDE] rounded-lg text-sm'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Expense  Approval</span>
                </div>
                <div className='mb-4 flex gap-2'>
                    <span className='inline-block px-4 py-2 bg-[#ffe7e5] rounded-lg min-w-[80px]'></span>
                    <span className='inline-block px-4 py-2 bg-[#EDECF9] text-[#7E7EDE] rounded-lg text-sm'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Customer Request Approval</span>
                    <span className='inline-block px-4 py-2 bg-[#f9f1e1] text-[#F58224] rounded-lg text-sm'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Field Request</span>
                </div>
                <div className='mb-4 flex gap-2'>
                    <span className='inline-block px-4 py-2 bg-[#ffe7e5] rounded-lg min-w-[80px]'></span>
                    <span className='inline-block px-4 py-2 bg-[#EBF3FF] text-[#0966FF] rounded-lg text-sm'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Travel Request</span>
                    <span className='inline-block px-4 py-2 bg-[#DCF5DE] text-[#60ba63] rounded-lg text-sm'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Vendor <br /> Registration</span>
                </div>
            </div>
            <div className='grid items-center'>
                <div>
                <h1 className='text-4xl font-bold text-black'>An End-To-End Workflow Platform For All Your Business Needs</h1>
                <p className='my-8'>1000+ companies-from Startups to Fortune 500s use BoloForms Approvals to build and manage business processes across departments.</p>
                <button className="mx-2 px-4 py-2 rounded border-2 border-[#915bff] text-[#915bff] font-bold bg-[#915bff] text-white hover:opacity-90"><FontAwesomeIcon className='mr-5' icon={faRocket}></FontAwesomeIcon> BoloForms Premium</button>
                </div>
            </div>
        </div>
    );
};

export default WorkflowPlatforms;