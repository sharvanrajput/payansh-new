import React from 'react'
import { Allsectionbanner, Footer, Navbar, Termsandcon } from '../components'

const Termsandcondition = ({theme,toggleTheme}) => {
  return (
    <>
       <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Allsectionbanner theme={theme} bannertitle={"Terms and Conditions"}  />
      <Termsandcon theme={theme} />
      <Footer theme={theme} />
    </>
  )
}

export default Termsandcondition
