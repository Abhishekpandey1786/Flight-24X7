import React from "react";
import { FaDollarSign, FaHandshake, FaPhoneVolume } from "react-icons/fa";
import { LiaUserTieSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Support() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-white/90 rounded-lg px-8 py-6 w-full max-w-5xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
      <Link to="/">
        <div className="flex flex-col items-center transition-all duration-300 transform hover:active:scale-75">
          <FaDollarSign className="text-5xl sm:text-6xl text-red-500" />
          <h1 className="font-bold text-black mt-2 text-base sm:text-lg text-center">
            Price Match Challenge
          </h1>
        </div>
      </Link>
      <Link to="/">
        <div className="flex flex-col items-center transition-all duration-300 hover:active:scale-75">
          <FaHandshake className="text-5xl sm:text-6xl text-red-500" />
          <h1 className="font-bold text-black mt-2 text-base sm:text-lg text-center">
            Amazing Flight Deals
          </h1>
        </div>
      </Link>
      <Link to="/">
        <div className="flex flex-col items-center transition-all duration-300 hover:active:scale-75">
          <FaPhoneVolume className="text-5xl sm:text-6xl text-red-500" />
          <h1 className="font-bold text-black mt-2 text-base sm:text-lg text-center">
            24/7 Customer Support
          </h1>
        </div>
      </Link>
      <Link to="/">
        <div className="flex flex-col items-center transition-all duration-300 hover:active:scale-75">
          <LiaUserTieSolid className="text-5xl sm:text-6xl text-red-500" />
          <h1 className="font-bold text-black mt-2 text-base sm:text-lg text-center">
            Travel Advisors
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Support;
