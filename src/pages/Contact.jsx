import React, { useState } from 'react'
import { Allsectionbanner, Contactinfo, Footer, Navbar } from '../components';

const Contact = ({theme, toggleTheme}) => {
   
  return (
    <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Allsectionbanner theme={theme} bannertitle={"CONTACT US"}  />

        <Contactinfo theme={theme} />
        <Footer theme={theme} />

    </>
  )
}

export default Contact
