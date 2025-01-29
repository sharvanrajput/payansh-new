import React, { useState } from 'react'
import { Allsectionbanner, Footer, Navbar } from '../components';

const Solutions = ({theme, toggleTheme}) => {
    
  return (
    <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Allsectionbanner theme={theme} bannertitle={"SOLUTIONS"}  />

        <Footer theme={theme} />

    </>
  )
}

export default Solutions
