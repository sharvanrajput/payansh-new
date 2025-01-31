import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import thumbs from '../../public/images/thumbs.webp';
import quote_icon from '../../public/images/quote-icon.png';

const Review = ({ theme }) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768, // Disable arrows on screens <= 768px
              settings: {
                arrows: false
              }
            }
          ]
    };
    return (
        <>

            <section className={`${theme ? "bg-dark text-white" : "bg-light text-black"} review py-0 `}>
                <div className="banner_top_shave " style={{ transform: "rotate(180deg)" }}>

                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" class="fill-white"></path>
                    </svg>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-5 align-self-center">
                            <div className="review_left">
                                <div className="icon iconReview">
                                    <img src={thumbs} width={100} alt="" />
                                    <span className='fw-semibold'>Clint's Feedback</span>
                                </div>
                                <h2>What Our Happy Clients Say</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptas? Lorem ipsum dolor sit </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <Slider {...settings}>
                                <div>
                                    <div className="review_slide">

                                        <div className={`${theme ? "text-dark" : "text-dark"} review_item text-center bg-white`}>
                                            <div className="icon">
                                                <img src={quote_icon} width={40} alt="" />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, placeat, quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nihil temporibus rerum. Aliquid libero maiores esse a dignissimos quas unde ipsam, quos voluptates, perspiciatis aliquam dolor distinctio culpa, fugit qui.</p>
                                            <h4>John Doe</h4>
                                            <span>CEO, Company Name</span>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="review_slide">

                                        <div className={`${theme ? "text-dark" : "text-dark"} review_item text-center bg-white`}>
                                            <div className="icon">
                                                <img src={quote_icon} width={40} alt="" />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, placeat, quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nihil temporibus rerum. Aliquid libero maiores esse a dignissimos quas unde ipsam, quos voluptates, perspiciatis aliquam dolor distinctio culpa, fugit qui.</p>
                                            <h4>John Doe</h4>
                                            <span>CEO, Company Name</span>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="review_slide">

                                        <div className={`${theme ? "text-dark" : "text-dark"} review_item text-center bg-white`}>
                                            <div className="icon">
                                                <img src={quote_icon} width={40} alt="" />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, placeat, quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nihil temporibus rerum. Aliquid libero maiores esse a dignissimos quas unde ipsam, quos voluptates, perspiciatis aliquam dolor distinctio culpa, fugit qui.</p>
                                            <h4>John Doe</h4>
                                            <span>CEO, Company Name</span>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="review_slide">

                                        <div className={`${theme ? "text-dark" : "text-dark"} review_item text-center bg-white`}>
                                            <div className="icon">
                                                <img src={quote_icon} width={40} alt="" />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, placeat, quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nihil temporibus rerum. Aliquid libero maiores esse a dignissimos quas unde ipsam, quos voluptates, perspiciatis aliquam dolor distinctio culpa, fugit qui.</p>
                                            <h4>John Doe</h4>
                                            <span>CEO, Company Name</span>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="review_slide">

                                        <div className={`${theme ? "text-dark" : "text-dark"} review_item text-center bg-white`}>
                                            <div className="icon">
                                                <img src={quote_icon} width={40} alt="" />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, placeat, quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nihil temporibus rerum. Aliquid libero maiores esse a dignissimos quas unde ipsam, quos voluptates, perspiciatis aliquam dolor distinctio culpa, fugit qui.</p>
                                            <h4>John Doe</h4>
                                            <span>CEO, Company Name</span>
                                        </div>

                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="banner_top_shave " >

                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" class="fill-white"></path>
                    </svg>
                </div>
            </section>
        </>
    );
};

export default Review;
