
import React from 'react'

import homefaq from "../api/homefaq.json"
const Faq = ({ theme }) => {
    return (
        <>
            <section className={` ${theme ? "text-white bg-dark" : "text-black bg-light "}  faq_wraper pb-0 `}>
               
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
                    <div className={`  ${theme ? "text-black" : "text-white "} row`}>
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
                <div className="banner_top_shave " >

<svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" class="fill-white"></path>
</svg>
</div>
            </section>
        </>
    )
}

export default Faq
