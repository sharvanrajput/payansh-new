import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Banner, Benefits, Downloadapp, Faq, Footer, Homeabout, Howitworks, Review, Whychooseus } from './components';


const App = () => {
  const [theme, setTheme] = useState(false); // false for light, true for dark

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

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

export default App
