import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

import footerlogo from '../../public/images/darklogo.png'
import lightlogo from '../../public/images/logo.png'

const Footer = ({theme}) => {
    return (
        <>
            <footer className={`${theme ? " banner_dark" : "bg-black text-white"} py-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="footer_Baout">
                                <img src={`${ theme ? footerlogo :  lightlogo} `} width={140} className=' pb-3' alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien id lectus mattis consectetur.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien id lectus mattis consectetur.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="quicklink ">
                                <h3>Quick links</h3>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>solutions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                        <div className="quicklink ">
                                <h3>Quick links</h3>
                                <ul>
                                    <li>Blog</li>
                                    <li>Faq</li>
                                    <li>Contact</li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <ul className='list-inline'>
                                <li><IoLocationSharp /> 217/8 Hansi Road, Karnal, Haryana - 132001</li>
                                <li><MdOutlineMailOutline /> care@payansh.com</li>
                            </ul>
                        


                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
