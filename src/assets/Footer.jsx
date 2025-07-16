import React from "react";
import { Link } from "react-router-dom"; 
import img3 from "./images/Payment.png"; // Adjust the path as necessary
const Footer = () => (
  <footer className="bg-[#0C4275] text-white">
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-8">
      {/* Left: Logo & Description */}
      <div className="flex-1 min-w-[220px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-2xl text-red-500">
            <span className="text-blue-600">Flight</span>24X7
          </span>
        </div>
        <p className="text-x text-gray-300 mb-4">
          "Flight 24x7 is a one-stop destination to purchase flight tickets at
          an affordable price. Being the leading player in the online flight
          booking, we offer exclusive deals and great discounts to make your
          trip budget-friendly."
        </p>
      </div>

      {/* Center: Quick Links */}
      <div className="flex-1 min-w-[180px] text-shadow-current p-4 rounded-lg">
        <h3 className="font-semibold mb-2 text-lg text-red-500"><Link to="/">Quick Links</Link></h3>
        <ul className="space-y-1 text-x  text-gray-300">
          <li>
             <Link to="/about" className="hover:text-red-500">
              About Us
             </Link>
          </li>
          <li>
            <Link to="/Contactus" className="hover:text-red-500">
              Contact Us
             </Link>
          </li>
          <li>
             <Link to="/faqs" className="hover:text-red-500">
               FAQs
             </Link>
          </li>
         
          <li>
            <Link to="/disclaimer" className="hover:text-red-500">
              Disclaimer
            </Link>
          </li>
        
          <li>
            <Link to="/terms" className="hover:text-red-500">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacypolicy" className="hover:text-red-500">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/cancellationpolicy" className="hover:text-red-500">
              Refund & Cancelation Policy 
            </Link>
          </li>
          <li>
            <Link to="/whychooseus" className="hover:text-red-500">
              Why choose us?
            </Link>
          </li>
        </ul>
      </div>

      {/* Right: Address & Payment */}
      <div className="flex-1 min-w-[220px] text-x text-gray-300">
        <h3 className="font-semibold mb-2 text-lg  text-red-500">Address</h3>
        <p className="text-x mb-3  text-gray-300">
          8 The Green Suite 10150, Dover, Delaware 19901, United States
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          <img src={img3} alt="" srcset="" />
        </div>
      </div>
    </div>
    <div className="bg-[#6D8AAE] text-center text-xs py-2">
      2025 Flight 24X7.COM LLC All rights reserved.
    </div>
  </footer>
);

export default Footer;
