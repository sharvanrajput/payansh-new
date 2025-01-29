import React, { useState } from 'react'
import { Allsectionbanner, Footer, Navbar } from '../components';

const About = ({theme, toggleTheme}) => {
  
    
    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
          
            <Allsectionbanner theme={theme} bannertitle={"ABOUT US"}  />
            <Footer theme={theme} />

        </>
    )
}

export default About
