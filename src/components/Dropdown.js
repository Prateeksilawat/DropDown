import React, { useState } from "react";
import list from "../list.json";

const Dropdown = () => {
  // State management
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCapital, setSelectedCapital] = useState(null);
  const [isStateOpen, setStateOpen] = useState(false);
  const [isCapitalOpen, setIsCapitalOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleStateDropdown = () => setStateOpen(!isStateOpen);
  const toggleCapitalDropdown = () => setIsCapitalOpen(!isCapitalOpen);

  // Handle state selection
  const handleSelectState = (state) => {
    setSelectedState(state);
    setSelectedCapital(null); 
    setStateOpen(false);
  };

  // Handle capital selection
  const handleSelectCapital = (capital) => {
    setSelectedCapital(capital);
    setIsCapitalOpen(false); 
  };

  return (
    <div className="relative inline-block w-64">
      <h1 className="font-mono font-bold text-xl mb-4">
        Select Your State and Capital
      </h1>

      {/* State Dropdown */}
      <div className="mb-4">
        <button
          onClick={toggleStateDropdown}
          className="w-full p-2 bg-blue-500 text-white rounded-md shadow-md flex justify-between items-center"
        >
          {selectedState ? selectedState.State_Name : "Select a State"}
          <span>{isStateOpen ? "▲" : "▼"}</span>
        </button>

        {/* State Dropdown List */}
        {isStateOpen && (
          <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {list.State.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelectState(item)} // Select state
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {item.State_Name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Capital Dropdown (only show when a state is selected) */}
      {selectedState && (
        <div>
          <button
            onClick={toggleCapitalDropdown}
            className="w-full p-2 bg-green-500 text-white rounded-md shadow-md flex justify-between items-center"
          >
            {selectedCapital ? selectedCapital : "Select a Capital"}
            <span>{isCapitalOpen ? "▲" : "▼"}</span>
          </button>

          {/* Capital Dropdown List */}
          {isCapitalOpen && (
            <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <li
                onClick={() => handleSelectCapital(selectedState.Capital)} // Select capital
                className="px-4 py-2 hover:bg-green-100 cursor-pointer"
              >
                {selectedState.Capital}
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
