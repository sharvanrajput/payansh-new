import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

import footerlogo from '../../public/images/darklogo.png'
import lightlogo from '../../public/images/logo.png'

const Footer = ({theme}) => {
    return (
        <>
            <footer className={`${theme ? " bg-black text-white" : "bg-white text-black"} pt-5`}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-12">
                            <div className="footer_Baout">
                                <img src={`${ theme ? lightlogo  : footerlogo } `} width={140} className=' pb-3' alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien id lectus mattis consectetur.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien id lectus mattis consectetur.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="quicklink ">
                                <h3>Quick links</h3>
                                <ul className='list-inline '>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>solutions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                        <div className="quicklink ">
                                <h3>Quick links</h3>
                                <ul className='list-inline '>
                                    <li>Faq</li>
                                    <li>Contact</li>
                                    <li>privacy policy</li>
                                    <li>terms & conditions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <h3>Get in touch</h3>
                            <ul className='list-inline '>
                                <li ><IoLocationSharp /> 217/8 Hansi Road, Karnal, Haryana - 132001</li>
                                <li><MdOutlineMailOutline /> care@payansh.com</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="row">
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
