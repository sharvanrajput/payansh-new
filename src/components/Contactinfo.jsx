import React, { useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import Button from './Button';
const Contactinfo = () => {

    const [name , setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const [number, setNumber] = useState()
    const [Address, setAddress] = useState()

    const handleChange = (e) => {
       setName((e)=>e.target.value)
       setEmail((e)=>e.target.value)
       setMessage((e)=>e.target.value)
       setNumber((e)=>e.target.value)
       setAddress((e)=>e.target.value)
    }


  


    return (
        <>
            <section className="contactinfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="more_info_box">

                                <div className="contact_icon">
                                    <MdLocationPin />

                                </div>
                                <h4>Address</h4>
                                <p>123 Street, City, State, Zip</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="more_info_box">

                                <div className="contact_icon">
                                    <BiSolidPhoneCall />
                                </div>
                                <h4>Phone</h4>
                                <p>+1 123-456-7890</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="more_info_box">

                                <div className="contact_icon">
                                    <MdMail />

                                </div>
                                <h4>Email</h4>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="map" style={{ width: "100%", height: "100%", overflow: "hidden", borderRadius: "10px" }}>
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
                        <div className="col-lg-6">
                            <div className="contact_form">
                                <h3>Get In Touch</h3>
                                <form action="">
                                    <div class="row g-4">
                                        <div class="col-md-6"> 
                                            <input type="text"  value={name } onChange={handleChange} placeholder="Your Name" required />
                                        </div>
                                        <div class="col-md-6"> 
                                            <input type="email" value={email} onChange={handleChange} placeholder="Your Email" required />
                                        </div>
                                        <div class="col-md-6"> 
                                            <input type="number" value={message} onChange={handleChange} placeholder="Your Number" required />
                                        </div>
                                        <div class="col-md-6"> 
                                            <input type="text" value={number} onChange={handleChange} placeholder="Your Address" required />
                                        </div>
                                        <div class="col-md-12"> 
                                            <textarea name="" value={Address} onChange={handleChange} placeholder="Your Message" id="" rows="7"></textarea>
                                        </div>
                                        <div class="col-md-12">
                                            <Button text={"Submit"}  />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contactinfo
