import React, { useState } from 'react'
import { Aboutabout, Allsectionbanner, Footer, MissionVision, Navbar, Review } from '../components';

const About = ({theme, toggleTheme}) => {
  
    
    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
          
            <Allsectionbanner theme={theme} bannertitle={"ABOUT US"}  />
            <Aboutabout theme={theme}  />
            <MissionVision theme={theme}  />
            <Review theme={theme} />

            <Footer theme={theme} />

        </>
    )
}

export default About
