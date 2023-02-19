import { faCheck, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WorkflowPlatforms = () => {
    return (
        <div className='my-8 p-4 grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-wrap'>
                <li className='bg-green-400 opacity-80 inline'>sdfdf</li>
                <li className='bg-red-400 opacity-80'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Approval Management</li>
                <li className='bg-green-400 opacity-80 inline'>sdfdf</li>
                <li className='bg-red-400 opacity-80'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Approval Management</li>
                <li className='bg-green-400 opacity-80 inline'>sdfdf</li>
                <li className='bg-red-400 opacity-80'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Approval Management</li>
                <li className='bg-green-400 opacity-80 inline'>sdfdf</li>
                <li className='bg-red-400 opacity-80'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Approval Management</li>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>An End-To-End Workflow Platform For All Your Business Needs</h1>
                <p className='my-6'>1000+ companies-from Startups to Fortune 500s use BoloForms Approvals to build and manage business processes across departments.</p>
                <button className="mx-2 px-4 py-2 rounded border-2 border-[#915bff] text-[#915bff] font-bold bg-[#915bff] text-white hover:opacity-90"><FontAwesomeIcon className='mr-5' icon={faRocket}></FontAwesomeIcon> BoloForms Premium</button>
            </div>
        </div>
    );
};

export default WorkflowPlatforms;