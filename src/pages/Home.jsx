import React, { useState } from 'react'


import { Banner, Benefits, Downloadapp, Faq, Footer, Homeabout, Howitworks, Navbar, Review, Whychooseus } from '../components'

const Home = ({theme, toggleTheme}) => {
   
    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Banner theme={theme} />
            <Homeabout theme={theme} />
            <Howitworks theme={theme} />
            <Benefits theme={theme} />
            <Whychooseus theme={theme} />
            <Downloadapp theme={theme} />
            <Review theme={theme} />
            <Faq theme={theme} />
            <Footer theme={theme} />

        </>
    )
}

export default Home
