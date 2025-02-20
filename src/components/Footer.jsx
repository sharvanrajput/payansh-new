import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";


import footerlogo from '../../public/images/darklogo.png'
import lightlogo from '../../public/images/logo.png'
import { Link } from 'react-router-dom';
import Button from './Button';

const Footer = ({ theme }) => {
    const tofacebook = () => {
        window.open("https://facebook.com", "_blank");

    }
    const toinsta = () => {
        window.open("https://instagram.com", "_blank");
    }
    const tolinkedin = () => {
        window.open("https://linkedin.com", "_blank");
    }
    const totwiter = () => {
        window.open("https://twitter.com", "_blank");
    }
    return (
        <>
            <footer className={`${theme ? " bg-black text-white" : "bg-white text-black"} pt-5`}>

                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-12">
                            <div className="footer_Baout">
                                <img src={`${theme ? lightlogo : footerlogo} `} width={140} className=' pb-3' alt="" />
                                <p className={`${theme ? "text-light" : "text-secondary"}`}>Payansh makes bill payments, rent transfers, and recharges faster, safer, and more rewarding.
                                </p>
                                <h3>Follow us </h3>
                                <div className='=social_wraper'>
                                    <button onClick={tofacebook} className='bg-transparent outline-none border-0 w-0 h-0 text-white'> <span className='bg_graident p-2 rounded-circle text-white '> <FaFacebookSquare /></span>
                                    </button>
                                    <button onClick={toinsta} className='bg-transparent outline-none border-0 w-0 h-0 text-white'> <span className='bg_graident p-2 rounded-circle text-white ms-2'> <FaInstagram /> </span></button>
                                    <button onClick={tolinkedin} className='bg-transparent outline-none border-0 w-0 h-0 text-white'><span className='bg_graident p-2 rounded-circle text-white ms-2'> <FaLinkedinIn /> </span></button>
                                    <button onClick={totwiter} className='bg-transparent outline-none border-0 w-0 h-0 text-white'> <span className='bg_graident p-2 rounded-circle text-white ms-2'> <FaTwitter /></span></button>
                                </div>
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
                                        <li className={`${theme ? "text-light" : "text-secondary"}`}>Faq</li>
                                    </Link>
                                    <Link to="/contact" className='text-decoration-none'>
                                        <li className={`${theme ? "text-light" : "text-secondary"}`}>Contact</li>
                                    </Link>

                                    <Link to="/privacy" className='text-decoration-none'>
                                        <li className={`${theme ? "text-light" : "text-secondary"}`}>Privacy policy</li>
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
                                <li className={`${theme ? "text-light" : "text-secondary"}`}><IoLocationSharp /> 217/8 Hansi Road, Karnal, Haryana - 132001</li>
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

                

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-black" id="staticBackdropLabel">Quick Contact</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <form    >
                                    <div className="mb-3">
                                        
                                        <input
                                            type="text" className="form-control" 
                                            placeholder="Name*"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email" className="form-control"
                                            placeholder="Email*"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="number" className="form-control"
                                            placeholder="Number*"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" placeholder='Requirment Details*' name="" id="" rows="3"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <Button text="Submit" />
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
