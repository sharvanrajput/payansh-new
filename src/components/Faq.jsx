
import React from 'react'

import homefaq from "../api/homefaq.json"
const Faq = ({theme}) => {
    return (
        <>
            <section className={` ${theme ? "text-white bg-black" : "text-black bg-white "}  faq_wraper `}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="banner_left  ">
                                <h2 className="">Frequently Asked Questions</h2>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={ `  ${theme ? "text-black" : "text-white "} row`}>
                        <div className="col">
                            <div className="accordion " id="accordionExample">
                                {homefaq?.map((ele, ind) => {
                                    return (
                                        <div className="accordion-item mt-3" key={ind}>
                                            <h3 className="accordion-header" id={`heading${ind}`}>
                                                <button
                                                    className={` ${theme ? "text-white" : "text-black "} accordion-button collapsed`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${ind}`}
                                                    aria-expanded="false"
                                                    aria-controls={`collapse${ind}`}
                                                >
                                                    {ele.question}
                                                </button>
                                            </h3>
                                            <div
                                                id={`collapse${ind}`}
                                                className={` ${theme ? "text-white" : "text-black "} accordion-collapse collapse`}
                                                aria-labelledby={`heading${ind}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">{ele.answer}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq
