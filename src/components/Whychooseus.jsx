import React from 'react'
import whychooseicon1 from '../../public/images/whychooseicon1.png'

const Whychooseus = ({ theme }) => {
    return (
        <>
            <section className={`whychoose ${theme ? "bg-dark" : "bg-light"} py-0`}>
                <div className="banner_top_shave " style={{ transform: "rotate(180deg)" }}>

                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" class="fill-white"></path>
                    </svg>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col align-self-center">
                            <div className="whychoose_left  ">
                                <h2 className={`${theme ? "text-white" : "text-black"}`}>Why choose us</h2>

                                <p className={`${theme ? "text-light" : "text-secondary"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis eget lectus convallis faucibus. Sed vel nunc condimentum, rutrum enim in, consectetur dui. Sed ut ipsum vel lectus convallis faucibus. Sed vel nunc condimentum, rutrum enim in, consectetur dui.</p>
                            </div>
                        </div>

                        <div className="row g-4 mx-0">
                            <div className="col-lg-6">
                                <div className={`whychoose_box  ${theme ? "text-white" : "text-black"} ${theme ? "bg-black" : "bg-white"} d-flex flex-md-row flex-column`}>
                                    <div className="why_icon">
                                        <img src={whychooseicon1} width={80} alt="" />
                                    </div>
                                    <div className="why_disc ps-lg-3 ">

                                        <h3 className="my-lg-0 my-2">Affordable and flexible</h3>
                                        <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis eget lectus convallis faucibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={`whychoose_box  ${theme ? "text-white" : "text-black"} ${theme ? "bg-black" : "bg-white"} d-flex flex-md-row flex-column`}>
                                    <div className="why_icon">
                                        <img src={whychooseicon1} width={80} alt="" />
                                    </div>
                                    <div className="why_disc ps-lg-3 ">

                                        <h3 className="my-lg-0 my-2">Affordable and flexible</h3>
                                        <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis eget lectus convallis faucibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={`whychoose_box  ${theme ? "text-white" : "text-black"} ${theme ? "bg-black" : "bg-white"} d-flex flex-md-row flex-column`}>
                                    <div className="why_icon">
                                        <img src={whychooseicon1} width={80} alt="" />
                                    </div>
                                    <div className="why_disc ps-lg-3 ">

                                        <h3 className="my-lg-0 my-2">Affordable and flexible</h3>
                                        <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis eget lectus convallis faucibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={`whychoose_box  ${theme ? "text-white" : "text-black"} ${theme ? "bg-black" : "bg-white"} d-flex flex-md-row flex-column`}>
                                    <div className="why_icon">
                                        <img src={whychooseicon1} width={80} alt="" />
                                    </div>
                                    <div className="why_disc ps-lg-3 ">

                                        <h3 className="my-lg-0 my-2">Affordable and flexible</h3>
                                        <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis eget lectus convallis faucibus.</p>
                                    </div>
                                </div>
                            </div>
                            


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
    )
}

export default Whychooseus
