import React from 'react'
import Button from './Button'
import aboutusimg from '../../public/images/aboutus.png';
import { Link } from 'react-router-dom';
import { FaCheckDouble } from "react-icons/fa6";



const Homeabout = ({ theme }) => {
  return (
    <>
        <section className={` bg-${theme ? "black text-white" : "white text-secondary"} homebanner py-5 `}>
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                        <div className="about_right">
                            <img src={aboutusimg} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className={`  homebanner  about_disc`}>
                            <h2 className={`  text-${theme ? "light" : "dark" }  `}>Who We Are?</h2>
                            <p className={`  text-${theme ? "light" : "secondary" } homebanner  about_disc`}>Managing last-minute finances can be stressful, but Payansh makes it effortless. Whether it’s monthly bills or rent payments, we help you stay in control of your finances with secure, instant, and flexible payment options.</p>
                          <div className="about_li d-flex justify-content-between p-2 ">

                            <ul className='list-inline   w-50'>
                              <li className='d-flex align-items-center '> <span className='banner_tick bg_graident me-2'> <FaCheckDouble />  </span>Pay rent using your Credit Card or bank account</li>
                              <li className='d-flex align-items-center '> <span className='banner_tick bg_graident me-2'> <FaCheckDouble />  </span>Schedule payments & receive reminders</li>
                              <li className='d-flex align-items-center '> <span className='banner_tick bg_graident me-2'> <FaCheckDouble />  </span> Earn cashback, rewards, and bonus miles</li>
                              
                            </ul>
                            <ul className='list-inline   w-50'>
                              <li className='d-flex align-items-center '> <span className='banner_tick bg_graident me-2'> <FaCheckDouble />  </span> Enjoy the lowest processing fees</li>
                              <li className='d-flex align-items-center '> <span className='banner_tick bg_graident me-2'> <FaCheckDouble />  </span> Accept unlimited payments directly into the vendor’s bank account</li>
                            </ul>
                          </div>
                            <p className={`  text-${theme ? "light" : "secondary" } homebanner  about_disc`}>We unlock the power of your unused credit limit, helping you achieve tier spends, maximize bonus rewards, and pay smarter every time.
                            </p>
                          <Link to='/about' >
                            <Button text={"About more.."} />
                          </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
          
           
        </section> 
    </>
  )
}

export default Homeabout
