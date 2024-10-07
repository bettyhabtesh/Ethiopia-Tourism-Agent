import React from "react";

// Import images from the Assets folder
import BartaWaterfall from "../Assets/BartaWaterfall.png";
import CenterOfEthiopia from "../Assets/CenterofEthiopia.png";
import EntotoMountain from "../Assets/EntotoMountain.png";
import Bale from "../Assets/Bale.png";
import Gondar from "../Assets/Gondar.png";
import Langano from "../Assets/Langano.png";

const TopDestinations = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-[#F3E9DC] py-16">
      <div className="container mx-auto px-6">
        {/* Large Font for Top Destinations with underline */}
        <h2 className="text-4xl font-semibold text-customBrown mb-12 text-center underline">
          Top Destinations
        </h2>
        
        {/* Grid Layout for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Destination 1: Barta Waterfall */}
          <div className="relative rounded-3xl overflow-hidden lg:row-span-2">
            <img
              src={BartaWaterfall}
              alt="Barta Waterfall"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 p-6">
              <h3 className="text-[36px] font-extrabold text-white">Barta Waterfall</h3>
              <p className="text-[16px] font-normal text-white mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Destination 2: Center of Ethiopia */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={CenterOfEthiopia}
              alt="Center of Ethiopia, Addis Ababa"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 p-6">
              <h3 className="text-[36px] font-extrabold text-white">
                Center of Ethiopia, Addis Ababa
              </h3>
              <p className="text-[16px] font-normal text-white mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Destination 3: Entoto Mountain */}
          <div className="relative rounded-3xl overflow-hidden lg:row-span-2">
            <img
              src={EntotoMountain}
              alt="Entoto Mountain"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 p-6">
              <h3 className="text-[36px] font-extrabold text-white">Entoto Mountain</h3>
              <p className="text-[16px] font-normal text-white mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Destination 4: Gondar */}
          <div className="relative rounded-3xl overflow-hidden lg:row-span-2">
            <img
              src={Gondar}
              alt="Gondar"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 p-6">
              <h3 className="text-[36px] font-extrabold text-white">Gondar</h3>
              <p className="text-[16px] font-normal text-white mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Destination 5: The best of Bale */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={Bale}
              alt="The best of Bale"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 p-6">
              <h3 className="text-[36px] font-extrabold text-white">The best of Bale</h3>
              <p className="text-[16px] font-normal text-white mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Destination 6: Langano */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={Langano}
              alt="Langano"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 p-6">
              <h3 className="text-[36px] font-extrabold text-white">Langano</h3>
              <p className="text-[16px] font-normal text-white mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TopDestinations;