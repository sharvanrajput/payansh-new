import React, { useEffect, useState } from 'react'



const SolutionsBoxes = ({ theme }) => {
    const [border, setBorder] = useState(
        {
            borderLeft: " 5px solid black",

        }
    )



    useEffect(() => {
        if (theme) {
            setBorder({
                borderLeft: " 5px solid white",

            })
        } else {
            setBorder({
                borderLeft: " 5px solid black",

            })
        }
    }, [theme])

    return (
        <>
            <section className={`solutionsboxes ${theme ? "bg-dark text-white" : "bg-light text-black"} py-0 `}>
                <div className="banner_top_shave " style={{ transform: "rotate(180deg)" }}>
                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" class="fill-white"></path>
                    </svg>
                </div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            <h2 className=""> Unique Solutions </h2>
                            <p className={`${theme ? "text-light" : "text-secondary"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptas? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, praesentium. Dolorum saepe, accusamus quia incidunt ut consectetur ad modi laboriosam? </p>
                        </div>
                    </div>
                    <div className="row mt-5 g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>

                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>

                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>

                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>

                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>

                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>

                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>

                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>

                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>

                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className={`${theme ? "text-light" : "text-secondary"} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
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

export default SolutionsBoxes
