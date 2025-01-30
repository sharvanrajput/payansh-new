import React from 'react'

import goles from '../../public/images/goals.jpg'
import values from '../../public/images/values.jpg'
import vision from '../../public/images/vision.jpg'

const MissionVision = ({theme}) => {
    return (
        <>
            <section className={` ${theme ? "bg-black" : "bg-white"}  misionvision`}>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-6">
                            <div className={`  ${theme ? "text-white" : "text-black"}   card bg-transparent wow fadeInLeftBig`} >
                                <div className="overflow-hidden rounded-4">
                                    <img src={goles} className="card-img-top rounded-4 wow swing" alt="Our goals" />
                                </div>
                                <div className="card-body px-0 mt-3">
                                    <h5 className="card-title  text_graident">our goles</h5>
                                    <p className="card-text">At payansh, our mission is rooted in maintaining a secure and stable environment for conducting business. We commit ourselves to transparency and honesty, valuing trust as the cornerstone that unites our clients and our team.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`  ${theme ? "text-white" : "text-black"}   card bg-transparent wow fadeInLeftBig`}  >
                                <div className="card-body px-0 pt-md-0">
                                    <h5 className="card-title  text_graident">Our Vision</h5>
                                    <p className="card-text">We envision payansh as a thriving international financial trading entity, delivering steadfast brokerage services while maximizing benefits for our partners and traders. Our success is built upon our people, our clients, and our employees, along with innovative trading solutions and advanced technology.</p>
                                </div>
                                <div className="overflow-hidden rounded-4 mt-3">
                                    <img src={values} className="card-img-top rounded-4 wow swing" alt="Our vision" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`  ${theme ? "text-white" : "text-black"}   card bg-transparent wow fadeInLeftBig`}  >
                                <div className="overflow-hidden rounded-4">
                                    <img src={vision} className="card-img-top rounded-4 wow swing" alt="Our values" />
                                </div>
                                <div className="card-body px-0 mt-3">
                                    <h5 className="card-title text_graident">Core Values</h5>
                                    <p className="card-text">In our professional endeavours, we emphasize the significance of operating within a secure and stable business landscape. Our commitment to transparency and honesty resonates in our values, fostering trust between our clients and us, the fundamental principle of conducting business ethically.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default MissionVision
