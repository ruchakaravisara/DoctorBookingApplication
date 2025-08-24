import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="py-12 px-6 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Find By Speciality</h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Explore our wide range of medical specialities to find the right doctor for your needs.
        </p>
      </div>

      {/* Speciality Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 overflow-scroll">
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)}
            to={`/doctors/${item.speciality}`}
            key={index}
            className="flex flex-col items-center p-4 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-200 ease-in-out group"
          >
            {/* Icon/Image */}
            <img
              src={item.image}
              alt={item.speciality}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-3 group-hover:scale-105 transition-transform duration-200"
            />

            {/* Label */}
            <p className="text-gray-700 font-medium text-sm sm:text-base text-center group-hover:text-blue-600 transition-colors duration-200">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;