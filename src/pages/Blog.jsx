import React, { useState } from 'react'
import { Allsectionbanner, Footer, Navbar } from '../components';

const Blog = ({theme, toggleTheme}) => {
    
  return (
    <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Allsectionbanner theme={theme} bannertitle={" BLOG"}  />

        <Footer theme={theme} />

    </>
  )
}

export default Blog
