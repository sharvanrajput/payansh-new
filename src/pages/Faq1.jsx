import React, { useState } from 'react'
import { Allsectionbanner, Faq, Footer, Navbar } from '../components'

const Faq1 = ({theme, toggleTheme}) => {
 
    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Allsectionbanner theme={theme} bannertitle={"FAQ'S"}  />

            <Faq />
            <Footer theme={theme} />

        </>
    )
}

export default Faq1
