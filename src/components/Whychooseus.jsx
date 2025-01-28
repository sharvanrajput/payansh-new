import React from 'react'

const Whychooseus = ({ theme }) => {
    return (
        <>
            <section className={`whychoose ${theme? "bg-dark" : "bg-light"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="whychoose_left  ">
                                <h2 className="text_graident">Why choose us</h2>
                                
                                <p className={`${theme? "text-white" : "text-black"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis eget lectus convallis faucibus. Sed vel nunc condimentum, rutrum enim in, consectetur dui. Sed ut ipsum vel lectus convallis faucibus. Sed vel nunc condimentum, rutrum enim in, consectetur dui.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="whychoose_left">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className={`whychoose_box ${theme? "text-white" : "text-black"} ${theme? "bg-black" : "bg-white"}`}>
                                            <i className="fas fa-check-circle"></i>
                                            <h3>Affordable and flexible</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis eget lectus convallis faucibus.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={`whychoose_box ${theme? "text-white" : "text-black"} ${theme? "bg-black" : "bg-white"}`}>
                                            <i className="fas fa-check-circle"></i>
                                            <h3>Affordable and flexible</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis eget lectus convallis faucibus.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={`whychoose_box ${theme? "text-white" : "text-black"} ${theme? "bg-black" : "bg-white"}`}>
                                            <i className="fas fa-check-circle"></i>
                                            <h3>Affordable and flexible</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis eget lectus convallis faucibus.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={`whychoose_box ${theme? "text-white" : "text-black"} ${theme? "bg-black" : "bg-white"}`}>
                                            <i className="fas fa-check-circle"></i>
                                            <h3>Affordable and flexible</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis eget lectus convallis faucibus.</p>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Whychooseus
