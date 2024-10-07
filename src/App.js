// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
};

export default App;