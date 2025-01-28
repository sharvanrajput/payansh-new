import React, { useEffect, useState } from 'react'
import Button from './Button'
// import banner_bottom from '../../public/images/banner_bottom.svg';
import AOS from "aos";
import "aos/dist/aos.css";






const Banner = ({ theme }) => {
   

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
      }, []);

  const el = React.useRef(null);


    const [bannertheme , setbannertheme] =  useState()

    useEffect(() => {
        if (theme) {
            setbannertheme("banner_dark");
        } else {
            setbannertheme("banner");
        }
    }, [theme]);

    return (
        <>
            <section  className={` fw-medium   ${bannertheme} ` }>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="banner_right  ">
                                <h1 className={` ${!theme ?  "text_graident" : "text-white"}`} >The next era of embedded  <br />finance </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magni animi vero quasi aut aperiam itaque perferendis quam rem minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <Button  colors={theme} text={"Get Started"} />
                            </div>
                        </div>
                        <div className="col-lg-6 banner_img"></div>
                    </div>
                    
                  
                </div>
               
                {/* <div className="container mt-5 ">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="service_box text-center" data-aos="fade-up" data-aos-delay="300">
                                <div className="logo">
                                    <img src="" alt="" />
                                </div>
                                <h3 className={`text_graident`}>Transparent Pricing</h3>
                                <p className={`text-black`}>Flat 2.50 % will be charged for all payment type and accept all kind of Credit cards.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service_box text-center" data-aos="fade-up" data-aos-delay="600">
                                <div className="logo">
                                    <img src="" alt="" />
                                </div>
                                <h3 className={`text_graident`}>Safe and Secure</h3>
                                <p className={`text-black`}>We apply 100+ risk rules so that you can rely on us for data security. All transactions are secured with 128 bit SSL encryption.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service_box text-center" data-aos="fade-up" data-aos-delay="900">
                                <div className="logo">
                                    <img src="" alt="" />
                                </div>
                                <h3 className={`text_graident`}>24/7 Instant Transfer</h3>
                                <p className={`text-black`}>Your payment will be transferred instantly to your landlord/biller's account.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service_box text-center" data-aos="fade-up" data-aos-delay="1200">
                                <div className="logo">
                                    <img src="" alt="" />
                                </div>
                                <h3 className={`text_graident`}>Fully Encrypted</h3>
                                <p className={`text-black`}>The server encrypts any information such as passwords, credit cards, and bank account details with AES encryption.</p>
                            </div>
                        </div>
                       
                    </div>
                </div> */}
            </section>
            
          
        </>
    )
}

export default Banner
