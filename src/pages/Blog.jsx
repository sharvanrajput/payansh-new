import React, { useState } from 'react'
import { Allsectionbanner, Blogs, Footer, Navbar } from '../components';

const Blog = ({theme, toggleTheme}) => {
    
  return (
    <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Allsectionbanner theme={theme} bannertitle={" BLOG"}  />
        


        <Blogs theme={theme} />
        <Footer theme={theme} />

    </>
  )
}

export default Blog
