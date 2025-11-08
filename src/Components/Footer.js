import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Logo from "../Assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#867F76] text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-x-16">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-2 flex flex-col sm:flex-row items-start">
            <img
              src={Logo}
              alt="ETA Logo"
              className="w-32 h-auto sm:w-48 sm:h-auto mb-4 sm:mb-0 sm:mr-8"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-customBrown mb-4">
                Ethiopian Tourism Agent
              </h2>
              <p className="text-lg sm:text-xl text-white">
                Our Addis Ababa office, conveniently located in the Mexico Area, 
                is open Monday to Saturday. <br />
                Need assistance? Our agents are available 24/7 to handle urgent requests and emergencies.
              </p>
            </div>
          </div>

          {/* Column 2: Contents */}
          <div className="col-span-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Contents</h3>
            <ul className="space-y-2 text-lg sm:text-xl">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/ethiopia" className="hover:underline">About Ethiopia</Link></li>
              <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="col-span-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                <FaTelegram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white mt-8"></div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm sm:text-base">
          © All Rights Reserved 2024 AJT
        </div>
      </div>
    </footer>
  );
};

export default Footer;
