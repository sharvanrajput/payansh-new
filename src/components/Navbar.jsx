import React from 'react';
import { SlLogin } from "react-icons/sl";
import lightlogo from '../../public/images/logo.png';
import darklogo from '../../public/images/darklogo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className={`bg-${theme ? "black" : "white"} fw-medium`} >
            <div className="container">
                <div className="navwraper d-flex align-items-center justify-content-between">

                    <div className="logo">
                        <img src={`${theme ? lightlogo : darklogo} `} width={150} alt="Logo" />
                    </div>

                    <div className="pages d-lg-block d-none">
                        <ul className="list-inline d-flex gap-4">
                            <Link to="/" className='text-decoration-none'>

                                <li className={`text-${theme ? "white" : "black"} fw-medium`}>Home</li>
                            </Link>
                            <Link to="/about" className='text-decoration-none'>
                                <li className={`text-${theme ? "white" : "black"} fw-medium`}>About</li>

                            </Link>
                            <Link to="/solutions" className='text-decoration-none'>

                                <li className={`text-${theme ? "white" : "black"} fw-medium`}>Solutions</li>
                            </Link>
                            <Link to="/faq" className='text-decoration-none'>

                                <li className={`text-${theme ? "white" : "black"} fw-medium`}>Faq</li>
                            </Link>
                            <Link to="/blog" className='text-decoration-none'>

                                <li className={`text-${theme ? "white" : "black"} fw-medium`}>Blog</li>
                            </Link>
                            <Link to="/contact" className='text-decoration-none'>
                                <li className={`text-${theme ? "white" : "black"} fw-medium`}>Contact</li>

                            </Link>
                        </ul>
                    </div>

                    <div className='d-lg-block d-none'>
                        <div className="loginbox d-flex align-items-center gap-3 ">

                            <div className="loginsignup">
                                <ul className="list-inline d-flex align-items-center gap-3">
                                    <li className={`text-${theme ? "white" : "black"} fw-medium`}>
                                        <span><SlLogin /></span> Login
                                    </li>
                                    <li className={` theembutton btn fw-medium signupshake`}>Sign Up</li>
                                </ul>
                            </div>

                            {/* Theme Toggle */}
                            <label className="switch ">
                                <input type="checkbox" checked={theme} onChange={toggleTheme} />
                                <span className="slider"></span>
                            </label>

                        </div>
                    </div>

                    <div className="mobile_menu_btn d-lg-none d-block">
                        <button className="btn fw-bold fs-3 theembutton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="bi bi-list"></i></button>

                    </div>
                </div>
            </div>




            <div className={"offcanvas offcanvas-start"} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className={`bg-${theme ? "black" : "white"} offcanvas-header`}>
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"><div className="logo">
                        <img src={`${theme ? lightlogo : darklogo} `} width={150} alt="Logo" />
                    </div></h5>

                    <button type="button" className="btn-close d-flex justify-content-center align-items-center p-3" data-bs-dismiss="offcanvas" aria-label="Close"><span className='px-3 py-1 rounded-3'> <i className="bi bi-x-square"></i></span></button>
                </div>
                <div className={` bg-${theme ? "black" : "white"} fw-medium offcanvas-body`}>
                    <div className="pages">
                        <ul className="list-inline d-flex flex-column gap-4">
                            <li className={`text-${theme ? "white" : "black"} fw-medium`}>Home</li>
                            <li className={`text-${theme ? "white" : "black"} fw-medium`}>About</li>
                            <li className={`text-${theme ? "white" : "black"} fw-medium`}>Solutions</li>
                            <li className={`text-${theme ? "white" : "black"} fw-medium`}>Blog</li>
                            <li className={`text-${theme ? "white" : "black"} fw-medium`}>Contact</li>
                        </ul>
                    </div>
                    <div className="loginbox  align-items-center gap-4 ">

                        <div className="loginsignup">
                            <ul className="list-inline d-flex justify-content-between py-3 align-items-center gap-4">
                                <li className={`text-${theme ? "white" : "black"} btn btn-outline-primary w-50 fw-medium`}>
                                    <span><SlLogin /></span> Login
                                </li>
                                <li className={` w-50 theembutton btn fw-medium signupshake`}>Sign Up</li>
                            </ul>
                        </div>

                        {/* Theme Toggle */}
                        <label className="switch  ">
                            <input type="checkbox" checked={theme} onChange={toggleTheme} />
                            <span className="slider"></span>
                        </label>

                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
