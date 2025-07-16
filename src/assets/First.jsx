import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
const First = () => {
  return (
    <div className="w-full bg-amber-50 border-b">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-4 space-y-3 sm:space-y-0">
        {/* Brand */}
        
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="text-2xl sm:text-3xl font-bold text-blue-700">Flight</span>
          <span className="text-2xl sm:text-3xl font-bold text-red-500">24X7</span>
        </div>

        {/* Support Info */}
        <div className="flex items-center space-x-2 font-bold ">
         <FaPhoneVolume  className="text-red-500"/>

          <div className="flex flex-col items-start">
            <span className="text-xs sm:text-sm font-bold text-blue-700 leading-none">
              CALL FOR 24X7 SUPPORT
            </span>
            <span className="text-sm sm:text-lg font-semibold text-red-500">
              <a
        href="tel:+18037459981"
        title="Call Us"
      > +1-803-745-9981</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
