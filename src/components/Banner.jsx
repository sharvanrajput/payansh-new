import React, { useEffect, useState } from 'react'
import Button from './Button'


import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckDouble } from "react-icons/fa6";


const Banner = ({ theme }) => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
    }, []);

    const el = React.useRef(null);


    const [bannertheme, setbannertheme] = useState()

    useEffect(() => {
        if (theme) {
            setbannertheme("banner_dark");
        } else {
            setbannertheme("banner");
        }
    }, [theme]);

    return (
        <>
            <section className={` fw-medium   ${bannertheme} pb-0  ${!theme ? "text-secondary" : "text-white"}` } >

                <div className="container pb-5">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="banner_right  ">
                                <h1 className={` ${!theme ? "text_graident" : "text-white"}`} >Simplify Your Payments with Payansh – Fast, Secure & Hassle-Free!
                                </h1>
                                <p className={` fw-normal ${!theme ? "text-secondary" : "text-light "}`}>Power your payments with Payansh, the ultimate BBPS-enabled platform designed for speed, security, and convenience. From mobile recharges and utility bills to loan repayments, taxes, and rent payments, manage it all in one place—quickly and seamlessly! </p>
                                <ul className='d-flex justify-content-between ps-0 list-inline mb-3'>

                                    <li className='d-flex align-items-center'> <span className='banner_tick bg_graident me-2'> <FaCheckDouble />  </span>Instant Payments          </li>
                                    <li className='d-flex align-items-center'> <span className='banner_tick bg_graident me-2'> <FaCheckDouble /> </span>  Secure Transactions    </li>
                                    <li className='d-flex align-items-center'> <span className='banner_tick bg_graident me-2'> <FaCheckDouble /> </span>   Effortless Billing</li>
                                </ul>
                                <span >
                                    <Button colors={theme} text={"Get Started"} />
                                </span>
                                <span className='ms-3'>
                                    <Button className="ms-2" colors={theme} text={"Explore Services"} />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6 banner_img"></div>
                    </div>
                </div>
                <div className="banner_bottom_shave " >
                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>


        </>
    )
}

export default Banner
