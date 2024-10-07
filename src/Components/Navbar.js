// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";

const Navbar = ({ scrollToDestinations }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-customGray bg-opacity-60 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src={Logo} alt="Ethiopia Travel Logo" className="h-50 -ml-2" />
        </div>
        <ul className="flex space-x-12 text-white text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <a onClick={scrollToDestinations} className="cursor-pointer">Top Destinations</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;