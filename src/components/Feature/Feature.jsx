import React from 'react';
import featureOne from '../../assets/feature_1.svg'
import featureTwo from '../../assets/feature_2.svg'
import featureThree from '../../assets/feature_3.svg'
import featureFour from '../../assets/feature_4.svg'
import featureFive from '../../assets/feature_5.svg'
import featureSix from '../../assets/feature_6.svg'
import featureSeven from '../../assets/feature_7.svg'
import featureEight from '../../assets/feature_8.svg'
import featureNine from '../../assets/feature_9.svg'
const Feature = () => {
    return (
        <div className='my-20 w-3/4 mx-auto'>
            <h1 className='font-bold text-4xl text-center'>Features</h1>
            <p className='font-semibold text-xl text-center'>Everything that your organisation will love, & more.</p>
            <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 mt-12'>
                <div>
                    <img src={featureOne} alt="" />
                    <h3 className='font-bold text-3xl text-black my-2'>Get started in less than 5 minutes.</h3>
                    <p className='text-semibold text-black text-[1.1rem]'>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.</p>
                </div>
                <div>
                    <img src={featureTwo} alt="" />
                    <h3 className='font-bold text-3xl text-black my-2'>Multi-level workflows</h3>
                    <p className='text-semibold text-black text-[1.1rem]'>To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.</p>
                </div>
                <div>
                    <img src={featureThree} alt="" />
                    <h3 className='font-bold text-3xl text-black my-2'>Dynamic Reciepients</h3>
                    <p className='text-semibold text-black text-[1.1rem]'>Approvers can be selected based on the answers to a form response or entered manually by the requestor.</p>
                </div>
                <div>
                    <img src={featureFour} alt="" />
                    <h3 className='font-bold text-3xl text-black my-2'>Role Based Workflows</h3>
                    <p className='text-semibold text-black text-[1.1rem]'>Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only.</p>
                </div>
                <div>
                    <img src={featureFive} alt="" />
                    <h3 className='font-bold text-3xl text-black my-2'>Conditional Logic</h3>
                    <p className='text-semibold text-black text-[1.1rem]'>To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.</p>
                </div>
                <div>
                    <img src={featureSix} alt="" />
                    <h3 className='font-bold text-3xl text-black my-2'>One-click Approvals</h3>
                    <p className='text-semibold text-black text-[1.1rem]'>Notification emails are sent to users and can be approved with a single click.</p>
                </div>
                <div>
                    <img src={featureSeven} alt="" />
                    <h3 className='font-bold text-3xl text-black my-2'>Responsive design</h3>
                    <p className='text-semibold text-black text-[1.1rem]'>It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.</p>
                </div>
                <div>
                    <img src={featureEight} alt="" />
                    <h3 className='font-bold text-3xl text-black my-2'>Enterprise grade security</h3>
                    <p className='text-semibold text-black text-[1.1rem]'>Majority of data stored in your spreadsheet. This ensures you have the complete control of your data with end to end encryption.</p>
                </div>
                <div>
                    <img src={featureNine} alt="" />
                    <h3 className='font-bold text-3xl text-black my-2'>Custom Dashboard</h3>
                    <p className='text-semibold text-black text-[1.1rem]'>Track approvals of various forms from a single place! See the approval process for each request in real-time</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;