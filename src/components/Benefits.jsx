import React, { useEffect } from "react";
// import benefits from "../../public/images/benefits1.png";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { SiTicktick } from "react-icons/si";
import benefit1 from "../../public/images/benefit1.svg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
// import { Pagination, Autoplay } from 'swiper/modules';



const Benefits = ({ theme }) => {



    return (
        <>
            <section className={` ${theme ? "text-light" : "text-black  "}  ${theme ? "bg-black" : "bg-white"} benefits`} >
                <div className="container">
                    <div className="row">
                        {/* Left Section */}
                        <div className="col">
                            <div className="banner_left text-lg-center  home-about-right">
                                <h2 className=" heading-graident">Know Your Benefits</h2>
                                <p className={`${theme ? "text-light" : "text-secondary"}`}>
                                    Unlock More with Payansh!

                                </p>

                            </div>
                        </div>

                        {/* Right Section with Swiper */}
                        {/* <div className="col-lg-8 col-md-12">
                            <div className="row px-3 ">
                                <Swiper
                                    slidesPerView={2} // Show 3 slides at a time
                                    slidesPerGroup={1} // Slide 1 at a time when navigating
                                    spaceBetween={30} // Add space between slides
                                    pagination={{
                                        clickable: true, // Make pagination dots clickable
                                    }}
                                    modules={[Pagination, Autoplay]} // Include the Pagination module
                                    autoplay={{
                                        delay: 1000, // 3 seconds delay
                                        disableOnInteraction: true, // Autoplay continues after user interaction
                                    }}
                                    loop={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1, // 1 slide for smaller screens
                                            spaceBetween: 10, // Smaller spacing for smaller screens
                                        },
                                        768: {
                                            slidesPerView: 2, // 2 slides for larger screens
                                            spaceBetween: 30, // Larger spacing for larger screens
                                        },
                                    }}
                                    className="mySwiper homebenefits_slider"
                                >
                                    <SwiperSlide>
                                        <div className="col-lg-12 ">
                                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                                <p className={`${theme ? "text-light" : "text-black"}`}>
                                                    Enjoy <strong>lowest service fee</strong> on rent payment, flat at 1.5% with no hidden charges
                                                </p>
                                                <div className="text-center">

                                               <img src={benefits} className='img-fluid mx-auto' alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-lg-12 ">
                                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                                <p className={`${theme ? "text-light" : "text-black"}`}>
                                                    Enjoy <strong>lowest service fee</strong> on rent payment, flat at 1.5% with no hidden charges
                                                </p>
                                                <div className="text-center">

                                               <img src={benefits} className='img-fluid mx-auto' alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-lg-12 ">
                                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                                <p className={`${theme ? "text-light" : "text-black"}`}>
                                                    Enjoy <strong>lowest service fee</strong> on rent payment, flat at 1.5% with no hidden charges
                                                </p>
                                                <div className="text-center">

                                               <img src={benefits} className='img-fluid mx-auto' alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-lg-12 ">
                                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                                <p className={`${theme ? "text-light" : "text-black"}`}>
                                                    Enjoy <strong>lowest service fee</strong> on rent payment, flat at 1.5% with no hidden charges
                                                </p>
                                                <div className="text-center">

                                               <img src={benefits} className='img-fluid mx-auto' alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-lg-12 ">
                                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                                <p className={`${theme ? "text-light" : "text-black"}`}>
                                                    Enjoy <strong>lowest service fee</strong> on rent payment, flat at 1.5% with no hidden charges
                                                </p>
                                                <div className="text-center">

                                               <img src={benefits} className='img-fluid mx-auto' alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                   
                                    
                                </Swiper>
                            </div>
                        </div> */}


                    </div>
                    <div className="row g-4">
                        
                        <div className="col-lg-3 col-md-6">
                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                
                                <img src={benefit1} width={50} alt="" />
                                <p className={`${theme ? "text-light" : "text-black"}`}> Automated Monthly Payments
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                <img src={benefit1} width={50} alt="" />
                                <p className={`${theme ? "text-light" : "text-black"}`}> 45-Day Credit Cycle Advantage
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                <img src={benefit1} width={50} alt="" />
                                <p className={`${theme ? "text-light" : "text-black"}`}> Secure & BBPS-Certified Payments

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                <img src={benefit1} width={50} alt="" />
                                <p className={`${theme ? "text-light" : "text-black"}`}> Instant Discounts & Welcome Benefits

                                </p>
                            </div>
                        </div>
                       
                        <div className="col-lg-3 col-md-6">
                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                <img src={benefit1} width={50} alt="" />
                                <p className={`${theme ? "text-light" : "text-black"}`}> Lowest Service Fee
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                <img src={benefit1} width={50} alt="" />
                                <p className={`${theme ? "text-light" : "text-black"}`}> Earn Credit Card Rewards

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                <img src={benefit1} width={50} alt="" />
                                <p className={`${theme ? "text-light" : "text-black"}`}> All-in-One Payment Platform
                                </p>
                            </div>
                        </div>
                       
                        <div className="col-lg-3 col-md-6">
                            <div className={` ${theme ? "bg-dark" : "bg-light"} benefit_box   bg-light `} >
                                <img src={benefit1} width={50} alt="" />
                                <p className={`${theme ? "text-light" : "text-black"}`}> Boost Your Credit Score

                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default Benefits;
