import React, { useState } from 'react'
import { Faq, Footer, Navbar } from '../components'

const Faq1 = ({theme, toggleTheme}) => {
 
    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Faq />
            <Footer theme={theme} />

        </>
    )
}

export default Faq1
