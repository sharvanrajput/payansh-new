import React, { useEffect, useState } from 'react'
import Button from './Button'
import banner_bottom from '../../public/images/banner_bottom_shape.svg';
import banner_element1 from '../../public/images/banner_element1.png';
import banner_element2 from '../../public/images/banner_element2.png';
import banner_element3 from '../../public/images/banner_element3.png';
import AOS from "aos";
import "aos/dist/aos.css";


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
            <section className={` fw-medium   ${bannertheme} pb-0`}>
               
                <div className="container pb-5">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="banner_right  ">
                                <h1 className={` ${!theme ? "text_graident" : "text-white"}`} >The next era of

                                    embedded finance </h1>
                                <p className={` fw-normal ${!theme ? "text-secondary" : "text-light "}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magni animi vero quasi aut aperiam itaque perferendis quam rem minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <Button colors={theme} text={"Get Started"} />
                            </div>
                        </div>
                        <div className="col-lg-6 banner_img"></div>
                    </div>
                </div>
                <div className="banner_bottom_shave " >
                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" class="fill-white"></path>
                    </svg>
                </div>
            </section>


        </>
    )
}

export default Banner
