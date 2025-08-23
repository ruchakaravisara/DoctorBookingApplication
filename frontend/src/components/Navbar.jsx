import React from 'react';
import { assets } from './../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <img 
          src={assets.logo} 
          alt="Logo" 
          className="h-10 sm:h-12 transition-transform duration-300 hover:scale-105"
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <NavLink to='/'>
            <li className="py-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-3/5 transition-all duration-300"></span>
            </li>
          </NavLink>
          <NavLink to='/doctors'>
            <li className="py-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group">
              ALL Doctors
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-3/5 transition-all duration-300"></span>
            </li>
          </NavLink>
          <NavLink to='/about'>
            <li className="py-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group">
              About
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-3/5 transition-all duration-300"></span>
            </li>
          </NavLink>
          <NavLink to='/contact'>
            <li className="py-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-3/5 transition-all duration-300"></span>
            </li>
          </NavLink>
        </ul>

        {/* CTA Button */}
        <div>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-semibold text-sm rounded-full 
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
            transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm">
            Create Account
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;