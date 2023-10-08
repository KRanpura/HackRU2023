import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/Post" className="text-white text-2xl font-semibold">
            RUAttending?
          </Link>

          <ul className="flex space-x-4 relative">
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                Events ▼
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg">
                  <li>
                    <Link
                      to="/Social"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Social
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Academic"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Academic
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Service"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Career"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/Dashboard" className="text-white hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
            <Link to="/Post" className="text-white hover:text-gray-300">
                Post
              </Link>
            </li>
            <li>
              <Link to="/GetInvolved" className="text-white hover:text-gray-300">
                getInvolved
              </Link>
            </li>
            <li>
              <Link to="/Login" className="text-white hover:text-gray-300">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
