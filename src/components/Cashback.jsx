import React from 'react'
import cashback from '../../public/images/cashback_and_reword.png'
const Cashback = ({theme}) => {
    return (
        <>

            <section  className={`cashback ${theme ? "bg-dark" : "bg-light"} py-0 ${!theme ? "text-secondary" : "text-white"}`}>
                <div className="banner_top_shave " style={{ transform: "rotate(180deg)" }}>

                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" className="fill-white"></path>
                    </svg>
                </div>

                <div className="container">
                    <div className="row">   
                        <div className="col-lg-6 ">
                            <div className="cashback_left">
                                <img src={cashback}  className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="cashback_riht">
                            <h2 className={`  text-${theme ? "light" : "dark" }  `}>Who We Are?</h2>
                            <p className={`  text-${theme ? "light" : "secondary" } homebanner  about_disc`}>Managing last-minute finances can be stressful, but Payansh makes it effortless. Whether it’s monthly bills or rent payments, we help you stay in control of your finances with secure, instant, and flexible payment options.</p>
                            <ul className='list-inline'>
                             <li>✨ Get up to 5% cashback on select transactions.</li>
                             <li>🎁 Enjoy special discounts on rent and bill payments.</li>
                             <li>🔥 Unlock bonus rewards with monthly transactions.</li>
                            </ul>
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

export default Cashback
