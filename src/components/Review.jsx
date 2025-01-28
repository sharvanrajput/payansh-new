import React from 'react'
import thumbs from '../../public/images/thumbs.webp'
import quote_icon from '../../public/images/quote-icon.png'
const Review = ({theme}) => {
    return (
        <>
            <section className={` ${theme ? "bg-dark text-white" : "bg-light text-dark"}   review `}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="review_left">
                                <div className="icon iconReview">
                                    <img src={thumbs} width={100} alt="" /> <span className='fw-semibold'>Clint's Feedback</span>
                                </div>
                                <h2>What Our Happy Clients Say</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptas? Lorem ipsum dolor sit </p>

                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="review_slide">
                                <div className={` ${theme ? " text-dark" : " text-dark"}  review_item text-center bg-white`}>
                                    <div className="icon ">
                                        <img src={quote_icon} width={40} alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, placeat, quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nihil temporibus rerum. Aliquid libero maiores esse a dignissimos quas unde ipsam, quos voluptates, perspiciatis aliquam dolor distinctio culpa, fugit qui.</p>
                                    <h4>John Doe</h4>
                                    <span>CEO, Company Name</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Review
