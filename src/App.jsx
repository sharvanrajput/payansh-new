import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About, Contact, Home, Privacy, Solutions, Termsandcondition } from './pages';
import Blog from './pages/blog';
import Faq1 from './pages/Faq1';
import { BlogDetails,    Signuplogin } from './components';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return JSON.parse(localStorage.getItem("theme")) || false ;
  });

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };


  return (
    <>
      {/* <CustomCursor /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/about" element={<About theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/contact" element={<Contact theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/blog" element={<Blog theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/blogs/:id" element={<BlogDetails theme={theme} toggleTheme={toggleTheme} />} /> 
          <Route path="/faq" element={<Faq1 theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/auth" element={<Signuplogin theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/solutions" element={<Solutions theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/Privacy" element={<Privacy theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/Termsandcondition" element={<Termsandcondition theme={theme} toggleTheme={toggleTheme} />} />
         
        </Routes>
      </Router>
    </>
  );
};

export default App;
