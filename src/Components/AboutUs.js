import React from 'react';
import { Link } from 'react-router-dom';
import aboutusBackground from "../Assets/aboutus.png";  // The background image
import traditionsImage from "../Assets/traditions.png";  // Image for traditions section
import cultureImage from "../Assets/culture.png";  // Image for culture section
import foodImage from "../Assets/food.png";  // Image for food section

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
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8 max-w-2xl">
          We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage.
        </p>
        <Link to="/" className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600">
          Back to Home
        </Link>
      </div>

      {/* Second Section - Traditions, Culture, Food */}
      <div className="bg-[#f3e9dc] py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#6F4E37]">Ethiopia, a country with a lot of history</h2>
          <p className="text-center text-gray-600 italic mb-12">A unique experience awaits you</p>

          {/* Traditions and Language Section */}
          <div className="flex flex-col md:flex-row items-start mb-16">
            {/* Image Section */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src={traditionsImage} 
                alt="Traditions of Ethiopia" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-3xl font-bold mb-4 text-[#4a3c31]">Traditions of Ethiopia</h3>
              <h4 className="text-2xl font-extrabold mb-4 text-[#6F4E37]">Language</h4>
              <p className="text-gray-700 mb-6 text-xl">
                Most people in the country speak Afroasiatic languages of the Cushitic or Semitic branches. The former
                includes the Oromo language, spoken by the Oromo, and Somali, spoken by the Somalis; the latter includes Amharic, spoken by the Amhara, and Tigrinya, spoken by the Tigrayans.
              </p>
            </div>
          </div>

          {/* Culture Section */}
          <div className="flex flex-col md:flex-row-reverse items-start mb-16">
            {/* Image Section */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src={cultureImage} 
                alt="Culture of Ethiopia" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 md:pr-12">
              <h4 className="text-2xl font-extrabold  mb-4 text-[#6F4E37]">Culture</h4>
              <p className="text-gray-700 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Food Section */}
          <div className="flex flex-col md:flex-row items-start">
            {/* Image Section */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src={foodImage} 
                alt="Food of Ethiopia" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 md:pl-12">
              <h4 className="text-2xl font-extrabold mb-4 text-[#6F4E37]">Food</h4>
              <p className="text-gray-700 text-xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;