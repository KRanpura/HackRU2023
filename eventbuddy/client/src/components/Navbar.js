import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/Post" className="text-white text-2xl font-semibold">RU Attendance</Link>

          <ul className="flex space-x-4">
            <li>
              <Link to="/Post" className="text-white hover:text-gray-300">Post</Link>
            </li>
            <li>
              <Link to="/Social" className="text-white hover:text-gray-300">Social Events</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
