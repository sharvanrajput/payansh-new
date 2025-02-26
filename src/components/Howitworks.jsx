import React from 'react'

const Howitworks = ({ theme }) => {

    return (
        <>

            <section className={`   ${theme ? "bg-dark" : "bg-light"} ${theme ? "text-light" : "text-black"} Howitwork bg-light py-0`}>
                <div className="banner_top_shave " style={{ transform: "rotate(180deg)" }}>

                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" className="fill-white"></path>
                    </svg>
                </div>
                <div className="container pb-5">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className={``} >How Payansh Works?
                            </h2>
                            <p className={`${theme ? "text-light" : "text-secondary"}`}>Simple, Fast & Hassle-Free
                            </p>
                        </div>
                    </div>

                    <div className="infoGraphic row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="steps_box">


                                <div className="numberWrap">
                                    <div className="number fontColor1">1</div>
                                    <div className={` ${theme ? "bg-dark" : "bg-light"} coverWrap bg-light`}>
                                        <div className=" numberCover "></div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="icon iconCodepen"></div>
                                    <h3>Sign Up & Login
                                    </h3>
                                    <p className={`${theme ? "text-light" : "text-secondary"}`}>Create your account in minutes with secure authentication.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="steps_box">

                                <div className="numberWrap">
                                    <div className="number fontColor2">2</div>
                                    <div className={` ${theme ? "bg-dark" : "bg-light"} coverWrap bg-light`}>
                                        <div className=" numberCover "></div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="icon iconSocial"></div>
                                    <h3>Complete KYC Verification </h3>
                                    <p className={`${theme ? "text-light" : "text-secondary"}`}> Verify your identity quickly for secure & seamless transactions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="steps_box">

                                <div className="numberWrap">
                                    <div className="number  fontColor3">3</div>
                                    <div className={` ${theme ? "bg-dark" : "bg-light"} coverWrap bg-light`}>
                                        <div className=" numberCover "></div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="icon iconAirplane"></div>
                                    <h3>Choose Your Payment 
                                    </h3>
                                    <p className={`${theme ? "text-light" : "text-secondary"}`}>Select from bill payments, recharges, rent, loans & more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="steps_box">

                                <div className="numberWrap">
                                    <div className="number  fontColor4">4</div>
                                    <div className={` ${theme ? "bg-dark" : "bg-light"} coverWrap bg-light`}>
                                        <div className=" numberCover "></div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="icon iconMap"></div>
                                    <h3>Pay Instantly 
                                    </h3>
                                    <p className={`${theme ? "text-light" : "text-secondary"}`}>Complete your transaction with real-time confirmation & BBPS-certified security.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="steps_box">

                                <div className="numberWrap">
                                    <div className="number  fontColor5">5</div>
                                    <div className={` ${theme ? "bg-dark" : "bg-light"} coverWrap bg-light`}>
                                        <div className=" numberCover "></div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="icon iconBulb"></div>
                                    <h3>Educate</h3>
                                    <p className={`${theme ? "text-light" : "text-secondary"}`}>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="banner_top_shave " >

                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>
        </>
    )
}

export default Howitworks
