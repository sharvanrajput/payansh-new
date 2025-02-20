import React from 'react'
import { FaCheckDouble } from "react-icons/fa6";
import playstor from '../../public/images/googleplay.svg'
import appstore from '../../public/images/appstore.svg'
import downloadapp from '../../public/images/downloadapp.png'
const Downloadapp = ({theme}) => {
    return (
        <>
            <section className={` ${theme ? "bg-black   " : "bg-white "} ${!theme ? "text-secondary" : "text-white"}  dowdnload pb-5`}>
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <h2 className={`${!theme ? "text-black" : "text-white"}`}>Download the Payansh App  Secure & Convenient
                            </h2>
                            <p className={`${theme ? "text-light" : "text-secondary"}`}> Manage all your payments in one tap! Experience fast, seamless, and secure transactions anytime, anywhere.
                            </p>
                            <ul className='list-inline mb-3'>
                                <li className='d-flex align-items-center my-2'><span className='banner_tick bg_graident me-2'> <FaCheckDouble />  </span> Instant & Secure Payments</li>
                                <li className='d-flex align-items-center my-2'><span className='banner_tick bg_graident me-2'> <FaCheckDouble />  </span> Track & Manage Transactions</li>
                                <li className='d-flex align-items-center my-2'><span className='banner_tick bg_graident me-2'> <FaCheckDouble />  </span> Auto-Pay & Bill Reminders</li>
                            </ul>
                            <div className="d-flex">
                                <button className='btn btn-dark' >
                                    <img src={playstor} alt="" style={{width:150}} className="img-fluid " />
                                </button>

                                <button className='btn btn-dark ms-3' >
                                    <img src={appstore} alt="" style={{width:140}} className="img-fluid " />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 app_img">
                            <img src={downloadapp} className='img-fluid' alt="" />
                        </div>
                    </div>

                </div>
              
            </section>

        </>
    )
}

export default Downloadapp
