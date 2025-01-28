
import React from 'react'

import homefaq from "../api/homefaq.json"
const Faq = () => {
    return (
        <>
            <section className="faq_wraper pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="banner_left text-white text-lg-start text-center home-about-right ">
                                <h2 className="fs-1 fs-1 heading-graident">Frequently Asked Questions</h2>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="accordion " id="accordionExample">
                                {homefaq?.map((ele, ind) => {
                                    return (
                                        <div className="accordion-item mt-3" key={ind}>
                                            <h3 className="accordion-header" id={`heading${ind}`}>
                                                <button
                                                    className="accordion-button collapsed"
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
                                                className="accordion-collapse collapse"
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
