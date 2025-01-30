import React, { useEffect, useState } from 'react'



const SolutionsBoxes = ({ theme }) => {
    const [border, setBorder] = useState(
        {
            borderLeft: " 5px solid black",

        }
    )



    useEffect(() => {
        if (theme) {
            setBorder(        {
                borderLeft: " 5px solid white",
    
            })
        } else {
            setBorder(        {
                borderLeft: " 5px solid black",
    
            })
        }
    }, [theme])

    return (
        <>
            <section className={`solutionsboxes ${theme ? "bg-dark text-white" : "bg-light text-black"} `}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            <h2 className=""> Unique Solutions </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptas? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, praesentium. Dolorum saepe, accusamus quia incidunt ut consectetur ad modi laboriosam? </p>
                        </div>
                    </div>
                    <div className="row mt-5 g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>
                              
                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>
                              
                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>
                              
                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>
                              
                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>
                              
                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>
                              
                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>
                              
                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>
                              
                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={` ${theme ? "bg-black" : "bg-white"} solution_box`}>
                              
                                <h3 style={border} className='ps-3' >Digital Marketing</h3>
                                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque eu consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo minima, quia quos reprehenderit esse saepe debitis! Neque tempora cum natus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SolutionsBoxes
