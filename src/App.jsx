import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About, Contact, Home, Solutions } from './pages';
import Blog from './pages/blog';
import Faq1 from './pages/Faq1';
import { CustomCursor } from './components';



const App = () => {
  const [theme, setTheme] = useState(false); // false for light, true for dark

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <>

        <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/about" element={<About theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/contact" element={<Contact theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/blog" element={<Blog theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/faq" element={<Faq1 theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/solutions" element={<Solutions theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </Router>













    </>
  )
}

export default App
