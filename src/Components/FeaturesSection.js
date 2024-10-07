import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the outlined versions of the icons
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faMap } from '@fortawesome/free-regular-svg-icons';

const FeaturesSection = () => {
  return (
    <section className="bg-[#F3E9DC] py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-40">
          {/* Feature 1: Explore */}
          <div className="flex flex-col items-center">
            <div className="mb-8 mt-8">
              <FontAwesomeIcon icon={faCompass} className="text-6xl text-customBrown" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">Explore</h3>
            <p className="text-2xl text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Feature 2: Enjoy */}
          <div className="flex flex-col items-center">
            <div className="mb-8 mt-8">
              <FontAwesomeIcon icon={faSmile} className="text-6xl text-customBrown" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">Enjoy</h3>
            <p className="text-2xl text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Feature 3: Experience */}
          <div className="flex flex-col items-center">
            <div className="mb-8 mt-8">
              <FontAwesomeIcon icon={faMap} className="text-6xl text-customBrown" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">Experience</h3>
            <p className="text-2xl text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
