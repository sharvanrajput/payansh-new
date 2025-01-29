import React from 'react'
import { Link } from 'react-router-dom'

const Allsectionbanner = ({ bannertitle, theme }) => {
    return (
        <>
            <section className={`breadcrumb ${theme  ? "text-white" : "text-black"} `}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h1>{bannertitle}</h1>
                            <ul className={` ${theme  ? "text-white" : "text-black"} breadcrumb-nav list-inline d-flex gap-3 justify-content-center`}>
                                <Link className={`text-decoration-none ${theme  ? "text-white" : "text-black"} `}>   <li className="breadcrumb-item">Home</li></Link> /
                                <li className={` ${theme  ? "text-white" : "text-black"} breadcrumb-item active `}>{bannertitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Allsectionbanner
