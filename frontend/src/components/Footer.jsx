import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Left, Center, Right */}
        <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20">

          {/* Left Section - Logo & Tagline */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <img
              src={assets.logo}
              alt="Logo"
              className="h-10 sm:h-12 mx-auto md:mx-0 mb-3"
            />
            <p className="text-sm sm:text-base font-medium text-gray-600">
              Your Health, Our Priority
            </p>
          </div>

          {/* Center Section - Company Links */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <p className="font-semibold text-gray-800 text-base sm:text-lg mb-4">Company</p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-gray-800 text-base sm:text-lg mb-4">Get In Touch</p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              <li>Email: support@doctorbooking.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; 2025 Doctor Booking System. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;