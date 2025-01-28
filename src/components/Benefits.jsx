import React, { useEffect } from "react";
import benefits from "../../public/images/benefits1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { SiTicktick } from "react-icons/si";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';



const Benefits = ({ theme }) => {



    return (
        <>
            <section className={` ${theme ? "text-white" : "text-black  "}  ${theme ? "bg-black" : "bg-white"} benefits`} >
                <div className="container">
                    <div className="row">
                        {/* Left Section */}
                        <div className="col-lg-4">
                            <div className="banner_left text-lg-start  home-about-right">
                                <h2 className="fs-1 fs-1 heading-graident">Know Your Benefits</h2>
                                <p className={` ${theme ? "text-white" : "text-black  "} fs-5`}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur.
                                </p>
                              
                            </div>
                        </div>

                        {/* Right Section with Swiper */}
                        <div className="col-lg-8 col-md-12">
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
                                                <p className={``}>
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
                                                <p className={``}>
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
                                                <p className={``}>
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
                                                <p className={``}>
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
                                                <p className={``}>
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
                                                <p className={``}>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Benefits;
