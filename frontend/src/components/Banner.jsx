import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* Left Side - Text & CTA */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          {/* Main Title */}
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Book Appointment
          </p>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
            Find the best doctors and book your appointment now!
          </p>

          {/* CTA Button */}
          <div onClick={() =>{ navigate('/login');scrollTo(0,0)}} className="flex justify-center lg:justify-start">
            <button className="px-7 py-3 bg-blue-600 text-white font-semibold rounded-full 
              hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
              transition-all duration-300 transform hover:scale-105 shadow-md">
              Create Account
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={assets.appointment_img}
            alt="Banner Image"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;