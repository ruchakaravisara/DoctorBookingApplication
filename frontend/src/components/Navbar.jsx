import React, { useState } from "react";
import { assets } from "./../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="fixed top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
        onClick={()=>navigate('/')}
          src={assets.logo}
          alt="Logo"
          className="h-10 sm:h-12 transition-transform duration-300 hover:scale-105"
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <NavLink to="/">
            <li className="py-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group">
              Home
              <hr className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-3/5 transition-all duration-300"></hr>
            </li>
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group">
              ALL Doctors
              <hr className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-3/5 transition-all duration-300"></hr>
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="py-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group">
              About
              <hr className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-3/5 transition-all duration-300"></hr>
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1 text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group">
              Contact
              <hr className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-3/5 transition-all duration-300"></hr>
            </li>
          </NavLink>
        </ul>

        {/* CTA Button */}
        <div>
  {token ? (
    <div className="flex items-center gap-2 cursor-pointer group relative">
      {/* Profile Image & Dropdown Icon */}
      <img
        className="w-8 h-8 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-400 transition-colors duration-200"
        src={assets.profile_pic}
        alt="User profile"
      />
      <img
        className="w-3 opacity-70 group-hover:rotate-180 transition-transform duration-300"
        src={assets.dropdown_icon}
        alt="Dropdown"
      />

      {/* Dropdown Menu */}
      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-1 transition-all duration-200 ease-in-out">
        <div className="py-2 text-sm font-medium text-gray-700">
          <p onClick={() => navigate("my-profile")} className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors duration-150">
            Profile
          </p>
          <p onClick={() => navigate("my-appointments")} className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors duration-150">
            My Appointments
          </p>
          <p onClick={()=>setToken(false)} className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors duration-150 text-red-500 hover:bg-red-50 hover:text-red-600">
            Logout
          </p>
        </div>
      </div>
    </div>
  ) : (
    <button
      onClick={() => navigate("/login")}
      className="px-6 py-2.5 bg-blue-600 text-white font-semibold text-sm rounded-full 
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
        transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm hidden md:block"
    >
      Create Account
    </button>
  )}
</div>
      </div>
    </div>
  );
};

export default Navbar;
