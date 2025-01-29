import React from 'react'

import blogdata from '../api/blogsdata.json'
import Button from './Button'
import { MdOutlineLink } from "react-icons/md";



const Blogs = ({ theme }) => {
    return (
        <>
            <section className={` ${theme ? "bg-black" : "bg-white"} blogs_container `}>
                <div className="container">
                    <div className="row g-4">
                        {
                            blogdata.map((blog) => (
                                <div className="col-lg-4 col-md-6 ">
                                    <div className={` ${theme ? "bg-dark text-white" : "bg-light texg-black"} h-100 blog_item`} key={blog.id}>
                                        <div className="blog_thumb">
                                            <div className="hovericon">
                                                <MdOutlineLink />
                                            </div>
                                            <img src={blog.image} className='img-fluid rounded ' alt={blog.title} />
                                        </div>
                                        <div className="py-2 px-4">

                                            <div className="blog_meta py-3 d-flex align-items-center justify-content-between">
                                                <span>By Admin </span>
                                                <span>{blog.date}</span>

                                            </div>
                                            <div className="blog_content  ">
                                                <h3>{blog.heading}</h3>
                                                <p>{blog.paragraph}</p>
                                                <Button text={"Read more.."} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>

            </section>
        </>
    )
}

export default Blogs
