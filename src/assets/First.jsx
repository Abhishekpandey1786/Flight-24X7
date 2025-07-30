import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";

const First = () => {
  // ✅ Conversion Event Trigger Function
  const handleCallClick = () => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17361609005/XYZ123456", // <-- Replace with your real event ID from Google Ads
      });
    }
  };

  return (
    <div className="w-full bg-amber-50 border-b">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 gap-3 sm:gap-0">
        {/* Brand */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
            Flight
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500">
            24X7
          </span>
        </div>

        {/* Support Info */}
        <div className="flex items-center gap-2 sm:gap-3">
          <FaPhoneVolume className="text-red-500 text-lg sm:text-xl" />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs sm:text-sm font-semibold text-blue-700">
              CALL FOR 24X7 SUPPORT
            </span>
            <h1 className="text-base sm:text-lg md:text-xl font-bold text-red-500">
              <a
                href="tel:+18062249728"
                title="Call Us"
                onClick={handleCallClick}
                className="hover:underline"
              >
                +1-806-224-9728
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
