import React, { useState } from 'react'
import { Allsectionbanner, Footer, Navbar } from '../components';

const Contact = ({theme, toggleTheme}) => {
   
  return (
    <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Allsectionbanner theme={theme} bannertitle={"CONTACT US"}  />

        <Footer theme={theme} />

    </>
  )
}

export default Contact
