import React from 'react';
import { Link } from 'react-router-dom';
import aboutusBackground from "../Assets/aboutus.png";
import traditionsImage from "../Assets/traditions.png";
import cultureImage from "../Assets/culture.png";
import foodImage from "../Assets/food.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Top Section with Background Image */}
      <div 
        style={{
          backgroundImage: `url(${aboutusBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-base sm:text-lg mb-8 max-w-xl sm:max-w-2xl">
          We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage.
        </p>
        <Link to="/" className="px-4 py-2 sm:px-6 sm:py-3 bg-customBrown bg-opacity-60 text-white font-semibold rounded-lg hover:bg-customBrown flex items-center space-x-2 transition ease-in-out duration-300">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className='text-base sm:text-xl font-light'>Back to home</span>
        </Link>
      </div>

      {/* Second Section - Traditions, Culture, Food */}
      <div className="bg-[#f3e9dc] py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-[#6F4E37]">Ethiopia, a country with a lot of history</h2>
          <p className="text-center text-gray-600 italic mb-8 sm:mb-12">A unique experience awaits you</p>

          {/* Traditions and Language Section */}
          <div className="flex flex-col md:flex-row items-start mb-12 sm:mb-16">
            <div className="md:w-1/2 mb-6 sm:mb-0">
              <img 
                src={traditionsImage} 
                alt="Traditions of Ethiopia" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-6 sm:pl-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#4a3c31]">Traditions of Ethiopia</h3>
              <h4 className="text-xl sm:text-2xl font-extrabold mb-4 text-[#6F4E37]">Language</h4>
              <p className="text-gray-700 mb-6 text-base sm:text-xl">
                Most people in the country speak Afroasiatic languages of the Cushitic or Semitic branches. The former
                includes the Oromo language, spoken by the Oromo, and Somali, spoken by the Somalis...
              </p>
            </div>
          </div>

          {/* Culture Section */}
          <div className="flex flex-col md:flex-row-reverse items-start mb-12 sm:mb-16">
            <div className="md:w-1/2 mb-6 sm:mb-0">
              <img 
                src={cultureImage} 
                alt="Culture of Ethiopia" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pr-6 sm:pr-12">
              <h4 className="text-xl sm:text-2xl font-extrabold mb-4 text-[#6F4E37]">Culture</h4>
              <p className="text-gray-700 text-base sm:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua...
              </p>
            </div>
          </div>

          {/* Food Section */}
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 mb-6 sm:mb-0">
              <img 
                src={foodImage} 
                alt="Food of Ethiopia" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-6 sm:pl-12">
              <h4 className="text-xl sm:text-2xl font-extrabold mb-4 text-[#6F4E37]">Food</h4>
              <p className="text-gray-700 text-base sm:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;