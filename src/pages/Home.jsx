import React, { useState } from 'react'


import { Banner, Benefits, Calltoaction, Downloadapp,  Footer, Homeabout, Howitworks, KeyFeature, Navbar, Review, Whychooseus } from '../components'
import Cashback from '../components/Cashback'

const Home = ({theme, toggleTheme}) => {
   
    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Banner theme={theme} />
            <KeyFeature theme={theme} />
            <Howitworks theme={theme} />
            <Benefits theme={theme} />
            <Whychooseus theme={theme} />
            <Downloadapp theme={theme} />
            <Calltoaction theme={theme} />
            <Review theme={theme} />
            {/* <Faq theme={theme} /> */}
            <Homeabout theme={theme} />
            <Cashback theme={theme} />
            <Footer theme={theme} />

        </>
    )
}

export default Home
