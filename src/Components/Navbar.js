import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";

const Navbar = ({ scrollToDestinations }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-customGray bg-opacity-60 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-6"> {/* Reduced py from 4 to 3 */}
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Ethiopia Travel Logo" className="h-12 md:h-16" /> {/* Reduced image height */}
        </div>

        {/* Hamburger icon (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-8 text-white text-lg md:text-xl absolute md:relative w-full md:w-auto bg-customGray md:bg-transparent left-0 md:flex-row flex-col md:items-center top-16 md:top-auto`}
        >
          <li className="text-center md:text-left">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="text-center md:text-left">
            <Link to="/aboutus" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li className="text-center md:text-left">
            <a
              onClick={() => {
                scrollToDestinations();
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Top Destinations
            </a>
          </li>
          <li className="text-center md:text-left">
            <a href="#" onClick={() => setIsOpen(false)}>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;