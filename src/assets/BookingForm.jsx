import React, { useState } from "react";
import { MdOutlineFlightTakeoff, MdPhone } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import Autocomplete from "./Autocomplete";
import Destination from "./Destination";

function BookingForm() {
  const [tripType, setTripType] = useState("round");
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infantSeat, setInfantSeat] = useState(0);
  const [infantLap, setInfantLap] = useState(0);
  const totalTravelers = adult + child + infantSeat + infantLap;
  const navigate = useNavigate();

  const handlePhoneClick = () => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17361609005/NFulCN_G0vIaEK3C1NZA",
        phone_conversion_number: "+1(803)745-9981",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const flightclass = e.target.flightclass.value;

    if (totalTravelers < 1) {
      alert("At least one traveler is required.");
      return;
    }
    if (totalTravelers > 9) {
      alert("Maximum 9 travelers allowed.");
      return;
    }
    if (!flightclass) {
      alert("Please select a flight class.");
      return;
    }
    navigate("/no-flights");
  };

  const TravelerCounter = ({ label, value, setValue }) => {
    const increase = () => {
      if (totalTravelers < 9) {
        setValue(value + 1);
      } else {
        alert("Maximum 9 travelers allowed.");
      }
    };

    return (
      <div>
        <label className="block text-xs mb-1">{label}</label>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setValue(Math.max(0, value - 1))}
            className="w-[30px] h-[25px] bg-gray-200 rounded text-black text-sm font-bold"
          >
            −
          </button>
          <input
            type="text"
            readOnly
            value={value}
            className="w-[30px] h-[25px] px-2 py-1 rounded border text-center text-xs"
          />
          <button
            type="button"
            onClick={increase}
            className="w-[30px] h-[25px] bg-gray-200 rounded text-black text-sm font-bold"
          >
            +
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-4 py-6 gap-6"
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/6630e01961a932246ebda785/66d92dfed42d7f5763e3cc7a_How%20Delta%20Airlines%20Improves%20Customer%20Experience%20(CX)%20with%20Operational%20Excellence.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Panel: Form */}
        <div className="w-full max-w-md">
          <div className="flex items-center space-x-2 bg-blue-900 px-4 py-2 w-fit rounded-t-md">
            <MdOutlineFlightTakeoff className="text-2xl text-white" />
            <h1 className="font-semibold text-white text-lg">FLIGHTS</h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-blue-900 text-white p-4 rounded-b-xl space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="tripType"
                  value="round"
                  onChange={(e) => setTripType(e.target.value)}
                  checked={tripType === "round"}
                  className="accent-red-500"
                />
                <span>Round Trip</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="tripType"
                  value="oneway"
                  onChange={(e) => setTripType(e.target.value)}
                  checked={tripType === "oneway"}
                  className="accent-red-500"
                />
                <span>One Way</span>
              </label>
            </div>

            <Autocomplete />
            <Destination />

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <input
                type="date"
                name="departure"
                required
                className="w-full sm:w-1/2 px-4 py-2 rounded bg-white text-black"
              />
              {tripType === "round" && (
                <input
                  type="date"
                  name="return"
                  required
                  className="w-full sm:w-1/2 px-4 py-2 rounded bg-white text-black"
                />
              )}
            </div>

            <div className="bg-white text-black p-3 rounded space-y-3">
              <div className="font-semibold flex items-center">
                <span className="text-red-600 mr-2">●</span> {totalTravelers} Traveler(s)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <TravelerCounter label="Adult" value={adult} setValue={setAdult} />
                <TravelerCounter label="Child (2-12 YRS)" value={child} setValue={setChild} />
                <TravelerCounter label="Infant (on seat under 2)" value={infantSeat} setValue={setInfantSeat} />
                <TravelerCounter label="Infant (on lap under 2)" value={infantLap} setValue={setInfantLap} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2 bg-amber-50 text-black rounded p-2">
                <label className="block mb-1 text-sm">Class</label>
                <select
                  name="flightclass"
                  required
                  className="w-full px-3 py-2 rounded border bg-amber-50 text-black text-sm"
                >
                  <option value="">Select Class</option>
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </select>
              </div>

              <div className="w-full sm:w-1/2 bg-amber-50 p-2 text-black rounded">
                <input
                  type="text"
                  placeholder="Enter Airline Name"
                  className="w-full px-3 py-2 rounded border bg-amber-50 mb-2 text-sm"
                />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="direct" className="accent-red-500" />
                  <label htmlFor="direct" className="text-sm">Direct Flight</label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded transition-all duration-300 hover:active:scale-95"
            >
              SEARCH FLIGHT
            </button>
          </form>
        </div>

        {/* Right Panel */}
        <div className="w-full max-w-md bg-amber-50 rounded-xl shadow-lg p-4 text-center opacity-90">
          <div className="relative bg-red-500 py-4 mb-3 rounded-xl text-center">
            <Link to="/no-flights">
              <h1 className="text-white text-xl font-bold transition-all duration-300 hover:active:scale-75">
                Book Online
              </h1>
            </Link>
          </div>

          <div className="text-lg font-bold text-black space-y-1 mb-6">
            <h1>Call 24x7</h1>
            <h1>For Changes & Cancelations</h1>
            <h1>IT'S FREE!</h1>
            <a
              href="tel:+1-833-959-2866"
              onClick={handlePhoneClick}
              className="text-2xl font-bold text-green-700 mb-4 animate-pulse transition-all duration-300 inline-block"
            >
              📞 +1-833-959-2866
            </a>
          </div>
        </div>
      </div>

      {/* Floating Call Button */}
      <a
        href="tel:+1-833-959-2866"
        onClick={handlePhoneClick}
        className="fixed bottom-[40px] right-4 z-50 bg-red-500 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-red-600 transition-all duration-300 animate-bounce  hover:active:scale-75"
        title="Call Us"
      >
        <MdPhone className="text-2xl" />
      </a>
    </>
  );
}

export default BookingForm;