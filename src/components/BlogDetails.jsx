import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import blogdata from '../api/blogsdata.json';
import { useParams } from 'react-router-dom';
import { WiDayCloudy } from 'react-icons/wi';

const BlogDetails = ({ theme, toggleTheme }) => {
  const { id } = useParams();
  const blog = blogdata.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="blogdetails">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className='blogdetails_thumb'>

              <img src={blog.image} className='img-fluid '  alt={blog.heading} />
              </div>
              <div className="blog_meta py-3 d-flex align-items-center justify-content-between">
                                        <span>By Admin</span>
                                        <span>{blog.date}</span>
                                    </div>
              <h2>{blog.heading}</h2>
              <p>{blog.paragraph}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer theme={theme} />
    </>
  );
};

export default BlogDetails;
