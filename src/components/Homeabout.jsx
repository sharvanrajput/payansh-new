import React from 'react'
import Button from './Button'
import aboutusimg from '../../public/images/aboutus.png';


const Homeabout = ({ theme }) => {
  return (
    <>
        <section className={` bg-${theme ? "black" : " white"} homebanner py-5 `}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className={`  homebanner  about_disc`}>
                            <h2 className={`  ${theme ? "white" : "black" } text_graident `}>About Payansh</h2>
                            <p className={`  text-${theme ? "white" : "black" } homebanner  about_disc`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias maxime enim aliquam sunt harum impedit iusto esse itaque blanditiis qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, exercitationem?</p>
                            <p className={`  text-${theme ? "white" : "black" } homebanner  about_disc`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias maxime enim aliquam sunt harum impedit iusto esse itaque blanditiis qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, exercitationem?</p>
                            <Button text={"About more.."} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about_right">
                            <img src={aboutusimg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Homeabout
