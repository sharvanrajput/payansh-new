import React from 'react'
import { Allsectionbanner, Footer, Navbar, PrivacyPolicy } from '../components'

const Privacy = ({theme , toggleTheme}) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Allsectionbanner theme={theme} bannertitle={"Privacy Policy"}  />
      <PrivacyPolicy theme={theme}  />
      
      <Footer theme={theme} />
    </>
  )
}

export default Privacy
