import React, { useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import Button from './Button';
const Contactinfo = ({ theme }) => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const [number, setNumber] = useState()
    const [Address, setAddress] = useState()

    const handlename = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlenumber = (e) => {
        setMessage(e.target.value)
    }
    const handleaddress = (e) => {
        setNumber(e.target.value)
    }
    const handlejmessage = (e) => {
        setAddress(e.target.value)
    }



    const handleSubmit = () => {
        // submit form here

        setName('')
        setEmail('')
        setMessage('')
        setNumber('')
        setAddress('')
    }



    return (
        <>
            <section className={` ${theme ? "bg-dark" : "bg-light"} contactinfo pb-0`}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6">
                        <h3 className={`${theme ? "text-white " : "  text-black"}`}>Get In Touch</h3>
                            <div className={` ${theme ? "text-white " : "  text-black"} more_info_box d-flex align-items-center`}>

                                <div className=" fs-2 contact_icon d-flex justify-content-center rounded-circle me-3 align-items-center  bg_graident text-white ">
                                    <MdLocationPin />

                                </div>
                                <div className="main_info">

                                    <h4>Address</h4>
                                    <p>123 Street, City, State, Zip</p>
                                </div>
                            </div>
                            <div className={` ${theme ? "text-white " : "  text-black"} more_info_box d-flex align-items-center`}>

                                <div className=" fs-2  contact_icon d-flex justify-content-center rounded-circle me-3 align-items-center bg_graident text-white ">
                                    <BiSolidPhoneCall />
                                </div>
                                <div className="main_info">

                                    <h4>Phone</h4>
                                    <p>+1 123-456-7890</p>
                                </div>
                            </div>
                            <div className={` ${theme ? "text-white " : "text-black"} more_info_box d-flex align-items-center`} >

                                <div className=" fs-2 contact_icon d-flex justify-content-center rounded-circle me-3 align-items-center  bg_graident text-white ">
                                    <MdMail />

                                </div>
                                <div className="main_info">

                                    <h4>Email</h4>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className={` border ${theme ? " bg-black text-white" : " bg-white  text-black"} rounded-4  shadow contact_form`}>
                                <h3>Let's Talk</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <input type="text" value={name} onChange={(e) => { handlename(e) }} placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" value={email} onChange={(e) => { handleEmail(e) }} placeholder="Your Email" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" value={message} onChange={(e) => { handlenumber(e) }} placeholder="Your Number" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" value={number} onChange={(e) => { handleaddress(e) }} placeholder="Your Address" required />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea name="" value={Address} onChange={(e) => { handlejmessage(e) }} placeholder="Your Message" id="" rows="7"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <Button text={"Submit"} />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="row g-4 mt-5">
                        <div className="col-lg-12">
                            <div className="map" style={{ width: "100%", height: "500px", overflow: "hidden", borderRadius: "10px" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766412.064051345!2d60.98276104002265!3d19.726858892884504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1738148344820!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
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

export default Contactinfo
