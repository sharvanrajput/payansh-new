import React, { useState } from 'react'
import { Footer, Navbar } from '../components';

const Contact = ({theme, toggleTheme}) => {
   
  return (
    <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <h1>Contact Us</h1>
        <Footer theme={theme} />

    </>
  )
}

export default Contact
