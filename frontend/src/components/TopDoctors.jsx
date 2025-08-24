import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Top Doctors</h1>
        <p className="text-gray-600 text-sm sm:text-base">Discover the best doctors in your area.</p>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mb-10">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
            onClick={() => navigate(`/appointment/${doctor._id}`)}
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Doctor Image */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-40 sm:h-48 object-cover"
            />

            {/* Doctor Info */}
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Available</p>
              </div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">{doctor.name}</p>
              <p className="text-gray-600 text-xs sm:text-sm truncate">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button onClick={() => {navigate("/doctors");scrollTo(0,0)}} className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-full 
          hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
          transition-all duration-300 transform hover:scale-105 shadow-sm">
          More Doctors
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;