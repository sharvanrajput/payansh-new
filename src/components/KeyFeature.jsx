import React from 'react'
import feature1 from '../../public/images/feature1.jpg'

const KeyFeature = ({theme}) => {
  return (
    <>
        <section  className={`key_feature bg-${theme ? "black text-white" : "white black"}  py-5 `}>
            <div className="container">
                    <div className="row">
                        <div className="col-lg-5  ">
                            <div className="key_features_left sticky-top ">
                                <h1>Key Features</h1>
                                <p className={`key_feature ${theme ? "text-white" : " text-secondary"}  `} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, purus vel vestibulum faucibus, odio ligula consectetur neque, ut viverra nunc velit eu velit. Sed auctor, ex vel imperdiet lobortis, justo velit facilisis felis, non faucibus ex diam ut velit.</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="key_features_right">
                                <ul>
                                <li>

                                <div className="keyfeature_box mb-5">
                                    
                                    <div className="keyfeature_icon">
                                        <img src={feature1} className='img-fluid rounded-5' alt="" />
                                    </div>
                                    <div  className={`keyfeature_disc bg-${theme ? "dark " : "light "} rounded-5 px-3 py-3 `}>
                                        <h3>Instant, Secure & Reliable 
                                        </h3>
                                        <p> Flat 2.50% fee on all transactions—no hidden charges. Accepts all major credit cards for seamless payments. Enjoy instant transactions with bank-grade security and BBPS-certified reliability for a hassle-free experience.</p>
                                    </div>
                                </div>
                                </li>
                                <li>

                                <div className="keyfeature_box mb-5">
                                    
                                    <div className="keyfeature_icon">
                                        <img src={feature1} className='img-fluid rounded-5' alt="" />
                                    </div>
                                    <div  className={`keyfeature_disc bg-${theme ? "dark " : "light "} rounded-5 px-3 py-3 `}>
                                        <h3>One Platform for Everything
                                        </h3>
                                        <p> Manage all your payments in one place—mobile & DTH recharges, utility bills, rent, loan repayments, and more. Enjoy 24/7 real-time processing, ensuring your payments reach your landlord, biller, or service provider instantly.</p>
                                    </div>
                                </div>
                                </li>
                                <li>

                                <div className="keyfeature_box mb-5">
                                    
                                    <div className="keyfeature_icon">
                                        <img src={feature1} className='img-fluid rounded-5' alt="" />
                                    </div>
                                    <div  className={`keyfeature_disc bg-${theme ? "dark " : "light "} rounded-5 px-3 py-3 `}>
                                        <h3>Earn Rewards
                                        </h3>
                                        <p>Enjoy exclusive cashback, discounts, and rewards every time you pay.</p>
                                    </div>
                                </div>
                                </li> 
                                <li>

 
                               <div className="keyfeature_box mb-5">
                                    
                                    <div className="keyfeature_icon">
                                        <img src={feature1} className='img-fluid rounded-5' alt="" />
                                    </div>
                                    <div  className={`keyfeature_disc bg-${theme ? "dark " : "light "} rounded-5 px-3 py-3 `}>
                                        <h3>Smart Reminders & Auto-Pay:  
                                        </h3>
                                        <p>Never miss a due date! Get real-time reminders and set up auto-pay for a stress-free payment experience.</p>
                                    </div>
                                </div>
                                </li> 
                                <li>


                               <div className="keyfeature_box mb-5">
                                    
                                    <div className="keyfeature_icon">
                                        <img src={feature1} className='img-fluid rounded-5' alt="" />
                                    </div>
  
                                 <div  className={`keyfeature_disc bg-${theme ? "dark " : "light "} rounded-5 px-3 py-3 `}>
                                        <h3> Full Data Encryption: </h3>
                                        <p> Your data stays safe & private with AES encryption for passwords, bank details, and credit cards.</p>
                                    </div>
                                </div>
                                </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>    
        </section> 
    </>
  )
}

export default KeyFeature
