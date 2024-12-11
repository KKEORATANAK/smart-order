import React, { useState } from "react";
import pic1 from "../../assets/photo/pic1.jpg";

const NarBar = () => {
  // State to track if dropdown is open and the selected value
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Dine In");

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  // Function to handle when a dropdown item is clicked
  const handleItemClick = (value) => {
    setSelectedValue(value); // Set the selected value
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className="flex flex-wrap justify-between items-center py-4 px-6 sm:px-12 lg:px-24 bg-white shadow">
      {/* Title of the Admin POS section */}
      <div className="text-lg font-bold text-gray-800">Admin POS</div>

      {/* Navigation links */}
      <div className="flex-1 flex justify-center">
        {/* Desktop view: Static navigation links */}
        <ul className="hidden sm:flex gap-6 text-sm font-medium text-gray-500 items-center">
          <li className="relative flex flex-col items-center">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-500">
              Dine In
            </span>
            <span className="w-1 h-1 bg-blue-500 rounded-full mt-1"></span>
          </li>
          <li className="cursor-pointer hover:text-gray-700 mb-2">Take Away</li>
          <li className="cursor-pointer hover:text-gray-700 mb-2">Deliver</li>
          <li className="cursor-pointer hover:text-gray-700 mb-2">Cancel</li>
        </ul>

        {/* Mobile view: Dropdown button */}
        <div className="block sm:hidden relative">
          {/* Button to toggle the dropdown */}
          <button
            onClick={toggleDropdown} // Call toggleDropdown when button is clicked
            aria-expanded={isDropdownOpen ? "true" : "false"} // Accessibility: indicate if dropdown is open
            className="text-blue-500 bg-blue-50 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            {selectedValue} {/* Display the selected value here */}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* The dropdown menu */}
          {isDropdownOpen && (
            <div className="z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-0 mt-2">
              <ul className="py-2 text-sm text-gray-700">
                {/* Hardcoded dropdown items */}
                <li>
                  <button
                    onClick={() => handleItemClick("Dine In")} // Set Dine In as the selected value
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Dine In
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleItemClick("Take Away")} // Set Take Away as the selected value
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Take Away
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleItemClick("Deliver")} // Set Deliver as the selected value
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Deliver
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleItemClick("Cancel")} // Set Cancel as the selected value
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-2">
        {/* Profile image */}
        <img
          src={pic1}
          alt="Admin Profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-300"
        />
        {/* Profile name and role */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-gray-800">Admin Daboy</p>
          <p className="text-xs text-gray-500">Cashier 01</p>
        </div>
      </div>
    </nav>
  );
};

export default NarBar;
