import React from 'react'
import { Link } from 'react-router-dom'

const Allsectionbanner = ({ bannertitle, theme }) => {
    return (
        <>
            <section className={`breadcrumb ${theme  ? "text-white bg-black" : "text-black bg-white"} `}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h1>{bannertitle}</h1>
                            <ul className={` ${theme  ? "text-white" : "text-black"} breadcrumb-nav list-inline d-flex gap-3 justify-content-center`}>
                                <Link to="/" className={`text-decoration-none ${theme  ? "text-white" : "text-black"} `}>   <li className="breadcrumb-item">Home</li></Link> /
                                <li className={` ${theme  ? "text-white" : "text-black"} breadcrumb-item active `}>{bannertitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="banner_bottom_shave " >
                    <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>

        </>
    )
}

export default Allsectionbanner
