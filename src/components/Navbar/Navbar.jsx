import React from 'react';
import logo from '../../assets/logo-nav.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar bg-transparent shadow-lg h-[75px] navbar-custom fixed top-0 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Pricing</a></li>
                        <li><a>Guides</a></li>
                        <li><a>Templates</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <a>
                    <img src={logo} alt="" className='h-36 w-36' />
                </a>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li tabIndex={0}>
                            <a>
                                Products
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Pricing</a></li>
                        <li><a>Guides</a></li>
                        <li><a>Templates</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <a><button className="mx-2 px-4 py-2 rounded border-2 border-[#915bff] text-[#915bff] font-bold hover:bg-[#915bff] hover:text-white">Install Now</button></a>
                <a><button className="mx-2 px-4 py-2 rounded border-2 border-[#915bff] text-[#915bff] font-bold bg-[#915bff] text-white">BoloForms Premium</button></a>
            </div>
        </div>
    );
};

export default Navbar;