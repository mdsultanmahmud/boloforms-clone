import { faHeadset, faPeopleGroup, faQuestion, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './HoverButton.css'
const HoverButton = () => {
    return (
        <div className='fixed left-3 top-1/2 transform translate-y-[-50%] z-10 hidden md:block'>
            <div className='btn-container'>
                <div className='btn-inner-container'>
                    <div className='btn-inner'>
                        <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                        <button className='btn-one'> Our Customers</button>
                    </div>
                </div>
            </div>
            <div className='btn-container'>
                <div className='btn-inner-container'>
                    <div className='btn-inner'>
                        <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                        <button className='btn-one'> Our Customers</button>
                    </div>
                </div>
            </div>
            <div className='btn-container'>
                <div className='btn-inner-container'>
                    <div className='btn-inner'>
                        <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                        <button className='btn-one'> Our Customers</button>
                    </div>
                </div>
            </div>
            <div className='btn-container'>
                <div className='btn-inner-container'>
                    <div className='btn-inner'>
                        <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                        <button className='btn-one'> Our Customers</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverButton;