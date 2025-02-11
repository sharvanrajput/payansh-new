import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

import footerlogo from '../../public/images/darklogo.png'
import lightlogo from '../../public/images/logo.png'
import { Link } from 'react-router-dom';

const Footer = ({ theme }) => {
    return (
        <>
            <footer className={`${theme ? " bg-black text-white" : "bg-white text-black"} pt-5`}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-12">
                            <div className="footer_Baout">
                                <img src={`${theme ? lightlogo : footerlogo} `} width={140} className=' pb-3' alt="" />
                                <p className={`${theme ? "text-light" : "text-secondary"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien id lectus mattis consectetur.</p>
                                <p className={`${theme ? "text-light" : "text-secondary"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien id lectus mattis consectetur.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="quicklink ">
                                <h3>Quick links</h3>
                                <ul className='list-inline '>
                                    <Link to="/" className='text-decoration-none'>
                                        <li className={`${theme ? "text-light" : "text-secondary"}`}>Home</li>
                                    </Link>
                                    <Link to="/about" className='text-decoration-none'>
                                        <li className={`${theme ? "text-light" : "text-secondary"}`}>About</li>
                                    </Link>
                                    <Link to="/Blog" className='text-decoration-none'>
                                        <li className={`${theme ? "text-light" : "text-secondary"}`}>Blog</li>
                                    </Link>
                                    <Link to="/solutions" className='text-decoration-none'>
                                        <li className={`${theme ? "text-light" : "text-secondary"}`}>Solutions</li>
                                    </Link>


                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="quicklink ">
                                <h3>Quick links</h3>
                                <ul className='list-inline '>
                                    <Link to="/faq" className='text-decoration-none'>
                                        <li  className={`${theme ? "text-light" : "text-secondary"}`}>Faq</li>
                                    </Link>
                                    <Link to="/contact" className='text-decoration-none'>
                                        <li  className={`${theme ? "text-light" : "text-secondary"}`}>Contact</li>
                                    </Link>

                                    <Link to="/privacy" className='text-decoration-none'>
                                        <li  className={`${theme ? "text-light" : "text-secondary"}`}>Privacy policy</li>
                                    </Link>
                                    <Link to='/Termsandcondition' className='text-decoration-none'>
                                    
                                    <li className={`${theme ? "text-light" : "text-secondary"}`}>terms & conditions</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <h3>Get in touch</h3>
                            <ul className='list-inline '>
                                <li  className={`${theme ? "text-light" : "text-secondary"}`}><IoLocationSharp /> 217/8 Hansi Road, Karnal, Haryana - 132001</li>
                                <li className={`${theme ? "text-light" : "text-secondary"}`}><MdOutlineMailOutline /> care@payansh.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col text-center py-3 border-top">
                            <p className="copy mb-0">&copy; 2022 Payansh. All rights reserved.</p>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
