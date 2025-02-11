import React from 'react'
import Button from './Button'
import businessconcept from '../../public/images/business-concept.jpg'
const Aboutabout = ({ theme }) => {
    return (
        <>
            <section className={` ${theme ? "bg-dark  text-white" : "bg-light text-black"} aboutabout py-0`}>
                <div className="banner_top_shave " style={{transform:"rotate(180deg)"}}>

                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" class="fill-white"></path>
                    </svg>
                </div>
                <div className="container">
                    <div className="row ">

                        <div className="col-lg-6">
                            <div className="about_left">
                                <img src={businessconcept} className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center ">
                            <h2>Lorem ipsum dolor .</h2>
                            <p className={`${theme ? "text-light" : "text-secondary"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio cum eos adipisci consequatur illum voluptatum quae officia, consectetur culpa voluptatem ex quisquam magni iusto natus dolores quaerat facere at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores quibusdam minus voluptate et neque sint nostrum repellendus necessitatibus omnis. </p>
                            <p className={`${theme ? "text-light" : "text-secondary"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio cum eos adipisci consequatur illum voluptatum quae officia, consectetur culpa voluptatem ex quisquam magni iusto natus dolores quaerat facere at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores quibusdam minus voluptate et neque sint nostrum repellendus necessitatibus omnis. </p>
                        </div>
                    </div>


                </div>
                <div className="banner_top_shave " >

                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" class="fill-white"></path>
                    </svg>
                </div>

            </section>
        </>
    )
}

export default Aboutabout
