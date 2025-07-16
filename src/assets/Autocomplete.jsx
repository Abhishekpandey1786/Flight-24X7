import React, { useState } from "react";

const citySuggestions = [
  // 🇮🇳 India
  "Delhi - DEL", "Mumbai - BOM", "Bangalore - BLR", "Hyderabad - HYD", "Chennai - MAA",
  "Kolkata - CCU", "Ahmedabad - AMD", "Pune - PNQ", "Jaipur - JAI", "Lucknow - LKO",
  "Goa - GOI", "Kochi - COK", "Thiruvananthapuram - TRV", "Bhubaneswar - BBI", "Varanasi - VNS",
  "Patna - PAT", "Indore - IDR", "Nagpur - NAG", "Chandigarh - IXC", "Srinagar - SXR",
  "Amritsar - ATQ", "Raipur - RPR", "Ranchi - IXR", "Visakhapatnam - VTZ", "Madurai - IXM",
  "Coimbatore - CJB", "Mangalore - IXE", "Tirupati - TIR", "Guwahati - GAU", "Dehradun - DED",

  // 🇺🇸 United States
  "New York - JFK", "Newark - EWR", "Los Angeles - LAX", "San Francisco - SFO", "Chicago - ORD",
  "Washington D.C. - IAD", "Boston - BOS", "Miami - MIA", "Dallas - DFW", "Houston - IAH",
  "Atlanta - ATL", "Seattle - SEA", "Denver - DEN", "Las Vegas - LAS", "Orlando - MCO",
  "Phoenix - PHX", "Philadelphia - PHL", "Charlotte - CLT", "Detroit - DTW", "Minneapolis - MSP",
  "San Diego - SAN", "Tampa - TPA", "Salt Lake City - SLC", "Portland - PDX", "Austin - AUS",
  "St. Louis - STL", "Nashville - BNA", "Kansas City - MCI", "Cleveland - CLE", "Cincinnati - CVG"
];


function AutocompleteInput() {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = citySuggestions.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSelect = (city) => {
    setInputValue(city);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Origin city/airport"
        value={inputValue}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-500"
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 bg-red-500 border rounded mt-1 w-full max-h-40 overflow-y-auto shadow">
          {filteredSuggestions.map((city, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-red-300 cursor-pointer text-sm"
              onClick={() => handleSelect(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutocompleteInput;
