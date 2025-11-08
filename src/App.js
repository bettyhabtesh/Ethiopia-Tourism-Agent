// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />
      <ContactUs />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;