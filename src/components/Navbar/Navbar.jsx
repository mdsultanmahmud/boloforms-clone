import React from 'react';
import logo from '../../assets/logo-nav.svg'
import './Navbar.css'
import checkmark from '../../assets/checkMark.svg'
import goggleSheet from '../../assets/googleSheet.svg'
import mailBox from '../../assets/mailbox.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <div className="navbar bg-base-200 shadow-lg h-[75px] navbar-custom fixed top-0 w-full z-10">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden fixed top-1 right-3">
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-[100vw]">
                        <li><a>Pricing</a></li>
                        <li><a>Guides</a></li>
                        <li><a>Templates</a></li>
                        <li><a>About Us</a></li>
                        <a><button className="px-4 py-1 rounded-2xl border-2 border-[#915bff] text-[#915bff] font-bold hover:bg-[#915bff] hover:text-white my-2 block mx-auto w-3/4">Install Now</button></a>
                        <a><button className="px-4 py-1 rounded-2xl border-2 border-[#915bff] text-[#915bff] font-bold bg-[#915bff] text-white hover:opacity-90 block mx-auto w-3/4">BoloForms Premium</button></a>
                    </ul>
                </div>
                <a>
                    <img src={logo} alt="" className='h-24 w-24' />
                </a>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li tabIndex={0}>
                            <a>
                                Products
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-8 bg-white shadow-lg mt-2 w-[800px]">
                                <div className='flex items-start p-4 mb-4 rounded-lg hover:bg-[#f7dff5] cursor-pointer'>
                                    <img src={checkmark} alt="" />
                                    <div className='ml-5'>
                                        <h2 className='text-semibold'>Form Approval</h2>
                                        <p className='font-normal '>Create interactive workflows, approval flows & automate processes using Google Forms.</p>
                                    </div>
                                </div>
                                <div className='flex items-start p-4 mb-4 rounded-lg hover:bg-[#f7dff5] cursor-pointer'>
                                    <img src={goggleSheet} alt="" />
                                    <div className='ml-5'>
                                        <h2 className='text-semibold'>SheetGod</h2>
                                        <p className='font-normal '>AI-powered Excel magic made easy!</p>
                                    </div>
                                </div>
                                <div className='flex items-start p-4 rounded-lg hover:bg-[#f7dff5] cursor-pointer'>
                                    <img src={mailBox} alt="" />
                                    <div className='ml-5'>
                                        <h2 className='text-semibold'>Signature</h2>
                                        <p className='font-normal '>Add Signature href your Google Forms</p>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li><a>Pricing</a></li>
                        <li><a>Guides</a></li>
                        <li><a>Templates</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <a><button className="mx-2 px-4 py-2 rounded border-2 border-[#915bff] text-[#915bff] font-bold hover:bg-[#915bff] hover:text-white">Install Now</button></a>
                <a><button className="mx-2 px-4 py-2 rounded border-2 border-[#915bff] text-[#915bff] font-bold bg-[#915bff] text-white hover:opacity-90">BoloForms Premium</button></a>
            </div>
        </div>
    );
};

export default Navbar;