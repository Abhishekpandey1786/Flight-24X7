import React from "react";

const NoFlightsFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4" style={{
        backgroundImage: `url('https://cdn.prod.website-files.com/6630e01961a932246ebda785/66d92dfed42d7f5763e3cc7a_How%20Delta%20Airlines%20Improves%20Customer%20Experience%20(CX)%20with%20Operational%20Excellence.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
    <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl text-center opacity-90" >
      <h2 className="text-3xl font-bold text-red-600 mb-6">
        For best deal! 
      </h2>
      <p className="text-gray-700 text-lg mb-4 font-bold">
        --Please contact on this number-- 
      </p>
      <p className="text-gray-600 text-base mb-6">
       
      </p>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded mb-6 ">
        <p className="font-semibold">
           Our travel experts are here to help!
        <br />
        Please call us directly and we'll find the best flights for you.

        </p>
        
      </div>

      <div className="text-2xl font-bold text-green-700 mb-4 animate-pulse">
        <a href="tel: 📞 +18037459981">📞 +1-803-745-9981</a>
      </div>

      <p className="text-gray-500 text-sm mb-6">
        Our team is available 24X7 to assist you with the best deal options.
      </p>

     

      <div className="mt-6 text-xs text-gray-400">
        © 2025 <span className="font-semibold">Flight 24X7.COM</span> LLC | All rights reserved.
      </div>
    </div>
  </div>
);

export default NoFlightsFound;
