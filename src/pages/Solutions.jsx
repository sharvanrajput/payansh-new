import React, { useState } from 'react'
import { Allsectionbanner, Footer, Navbar, SolutionsBoxes } from '../components';

const Solutions = ({theme, toggleTheme}) => {
    
  return (
    <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Allsectionbanner theme={theme} bannertitle={"SOLUTIONS"}  />

        <SolutionsBoxes theme={theme} />
        <Footer theme={theme} />

    </>
  )
}

export default Solutions
