import React from 'react';
import blogdata from '../api/blogsdata.json';
import Button from './Button';
import { MdOutlineLink } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const Blogs = ({ theme }) => {
    const navigate = useNavigate(); // ✅ Fix: Add navigate

    return (
        <section className={` ${theme ? "bg-dark" : "bg-light"} blogs_container py-0 `}>
            <div className="banner_top_shave " style={{transform:"rotate(180deg)"}} >
                <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" className="fill-white"></path>
                </svg>
            </div>
            <div className="container py-5">
                <div className="row g-4">
                    {blogdata.map((blog) => (
                        <div className="col-lg-4 col-md-6" key={blog.id}> {/* ✅ Fix: Move key here */}
                            <div className={` ${theme ? "bg-black text-white" : "bg-white text-black"} h-100 blog_item`}>
                                <div className="blog_thumb">
                                    <div className="hovericon">
                                        <MdOutlineLink />
                                    </div>
                                    <img src={blog.image} className='img-fluid rounded' alt={blog.heading} />
                                </div>
                                <div className="py-4 px-4">
                                    <div className="blog_meta py-3 d-flex align-items-center justify-content-between">
                                        <span>By Admin</span>
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="blog_content">
                                        <h3 className='line-clamp3'>{blog.heading}</h3>
                                        <p className={`${theme ? "text-light" : "text-secondary"} line-clamp2`}>{blog.paragraph}</p>

                                        {/* ✅ Fix: Correct navigation */}
                                        <Link to={`/blogs/${blog.id}`}>
                                            <Button text={"Read more.."} onClick={() => navigate(`/blogs/${blog.id}`)} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="banner_top_shave " >

                <svg viewBox="0 0 1536 160" fill={`${theme ? "#000" : "#fff"} `} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M1536 160V0L806.66 151.52C779.75 157.11 751.98 157.09 725.08 151.47L0 0V160H1536Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
};

export default Blogs;
