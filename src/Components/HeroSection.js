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
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-24">
        <h1 className="text-6xl font-bold text-white mb-4 ml-48 ">Explore Ethiopia</h1>
        <p className="text-2xl text-white mb-8 ml-48 font-light ">
          Ethiopia, a heaven on earth for you to explore
        </p>
        <a
          href="#"
          className="ml-48 px-6 py-3 bg-customBrown bg-opacity-60 text-white font-semibold rounded-lg hover:bg-customBrown flex items-center space-x-2 transition ease-in-out duration-300"
        >
          <span  className='text-xl font-light'>Learn more</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;