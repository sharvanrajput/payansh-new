import React from 'react'
import Button from './Button'
import businessconcept from '../../public/images/business-concept.jpg'
const Aboutabout = ({theme}) => {
    return (
        <>
            <section className={` ${theme ? "bg-black text-white" : "bg-white text-black"} aboutabout`}>
                <div className="container">
                    <div className="row ">

                        <div className="col-lg-6">
                            <div className="about_left">
                                <img src={businessconcept} className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center ">
                            <h2>Lorem ipsum dolor .</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio cum eos adipisci consequatur illum voluptatum quae officia, consectetur culpa voluptatem ex quisquam magni iusto natus dolores quaerat facere at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores quibusdam minus voluptate et neque sint nostrum repellendus necessitatibus omnis. </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio cum eos adipisci consequatur illum voluptatum quae officia, consectetur culpa voluptatem ex quisquam magni iusto natus dolores quaerat facere at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores quibusdam minus voluptate et neque sint nostrum repellendus necessitatibus omnis. </p>
                        </div>
                    </div>

                  
                </div>
            </section>
        </>
    )
}

export default Aboutabout
