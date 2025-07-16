import React from "react";
import { Link } from "react-router-dom";
import { FaPlane, FaMapMarkerAlt } from "react-icons/fa";

const airlines = [
  ["Aeromexico", "Emirates", "Southwest_Airlines", "Alaska"],
  ["Delta_Airlines", "Flights_To_Canada", "Spirit_Airlines", "Vuelos_Baratos"],
  ["Allegiant_Airlines", "American_Airlines", "Frontier_Airlines", "WestJet_Airlines"],
];

const destinations = [
  ["Alaska", "Amsterdam", "Atlanta", "Bangkok", "Boston", "Canada", "Dallas"],
  ["Dubai", "Frankfurt", "LasVegas", "London", "LosAngeles", "Madrid", "Mexico"],
  ["Miami", "NewYorkCity", "Paris", "Paro", "Rome", "SanFrancisco", "Seattle"],
  ["Singapore", "Sweden", "Thailand", "Tokyo", "UnitedStates", "Vancouver", "Denver"],
];

const FlightLinks = () => (
  <div className="w-full py-12 px-4 sm:px-8 lg:px-20 bg-gradient-to-br from-white  font-bold">
    <div className="max-w-7xl mx-auto space-y-16">
      
      {/* Airlines Section */}
      <div>
        <h1 className="text-red-500 text-2xl sm:text-3xl font-extrabold mb-8 text-center underline decoration-red-300">
          ✈ Airlines
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
          {airlines.map((col, idx) => (
            <ul key={idx} className="bg-white shadow-md rounded-xl p-4 w-full max-w-[250px] transition-transform hover:-translate-y-1 hover:shadow-xl space-y-3">
              {col.map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/airline/${encodeURIComponent(item)}`}
                    className="text-gray-800 hover:text-red-500 text-[15px] flex items-center gap-2 transition-colors"
                  >
                    <FaPlane className="text-red-400" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Destinations Section */}
      <div>
        <h1 className="text-red-500 text-2xl sm:text-3xl font-extrabold mb-8 text-center underline decoration-red-300">
          🌍 Top Flight Destinations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {destinations.map((col, idx) => (
            <ul key={idx} className="bg-white shadow-md rounded-xl p-4 w-full max-w-[250px] transition-transform hover:-translate-y-1 hover:shadow-xl space-y-3">
              {col.map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/destination/${encodeURIComponent(item)}`}
                    className="text-gray-800 hover:text-red-500 text-[15px] flex items-center gap-2 transition-colors"
                  >
                    <FaMapMarkerAlt className="text-red-400" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default FlightLinks;
