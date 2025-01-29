import React, { useState } from 'react'
import { Footer, Navbar } from '../components';

const Solutions = ({theme, toggleTheme}) => {
    
  return (
    <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <h1>Solutions</h1>
        <Footer theme={theme} />

    </>
  )
}

export default Solutions
