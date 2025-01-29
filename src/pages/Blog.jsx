import React, { useState } from 'react'
import { Footer, Navbar } from '../components';

const Blog = ({theme, toggleTheme}) => {
    
  return (
    <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <h1>Blog Page</h1>  
        <Footer theme={theme} />

    </>
  )
}

export default Blog
