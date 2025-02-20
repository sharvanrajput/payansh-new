import React from 'react'
import Button from './Button'

const Calltoaction = ({theme}) => {
    return (
        <>
            <section className={` ${theme ? "bg-black   " : "bg-white "}   pb-5`}>

                <div className={`container ${theme ? "bg-dark   " : "bg-light "} cta rounded-3`}>
                    <div className="row">
                        <div className="col-lg-6 align-self-center text-md-start text-center p-md-5 p-3   ">
                            <h2 className={`${!theme ? "text-black" : "text-white"} `}>Download the Payansh App  Secure & Convenient
                            </h2>
                            <p className={`${theme ? "text-light" : "text-secondary"}`}> Manage all your payments in one tap! Experience fast, seamless, and secure transactions anytime, anywhere.
                            </p>
                           
                          
                        </div>
                        <div className="col-lg-6 p-md-5 p-3 app_img">
                            <div className=' d-flex justify-content-center h-100 align-items-center'>
                            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='border-0 bg-transparent'>

                            <Button text="Enquiry Now" />
                            </button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Calltoaction
