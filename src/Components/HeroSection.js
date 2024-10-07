import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import monkey from "../Assets/monkey.avif";

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <img
        src={monkey}
        alt="Explore Ethiopia"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:px-12 lg:px-24">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:ml-24 md:ml-48">
          Explore Ethiopia
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:ml-24 md:ml-48 font-light">
          Ethiopia, a heaven on earth for you to explore
        </p>
        
        {/* CTA Button */}
        <a
          href="/aboutus"
          className="sm:ml-24 md:ml-48 px-4 py-2 sm:px-6 sm:py-3 bg-customBrown bg-opacity-60 text-white font-semibold rounded-lg hover:bg-customBrown flex items-center space-x-2 transition ease-in-out duration-300"
        >
          <span className="text-base sm:text-lg md:text-xl font-light">Learn more</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;