import React, { useState } from 'react'
import { Footer, Navbar } from '../components';

const About = ({theme, toggleTheme}) => {
  
    
    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <h1>About Page</h1>
            <Footer theme={theme} />

        </>
    )
}

export default About
