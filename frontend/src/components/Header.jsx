import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <header className="px-6 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* Left Side - Text & CTA */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Book Appointment <br />
            <span className="text-blue-600">with Trusted Doctors</span>
          </h1>

          {/* Description */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src={assets.group_profiles}
              alt="group profile"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <p className="text-sm sm:text-base text-gray-600 max-w-xs">
              This is a doctor appointment booking system where you can easily schedule visits with verified medical professionals.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#speciality"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full 
                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                transition-all duration-300 transform hover:scale-105 shadow-sm"
            >
              Book Appointment
              <img src={assets.arrow_icon} alt="arrow right" className="w-4" />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={assets.header_img}
            alt="Doctor"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-md"
          />
        </div>

      </div>
    </header>
  );
};

export default Header;