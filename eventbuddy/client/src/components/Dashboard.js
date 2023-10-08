import React, { useState, useEffect } from 'react';
import { getPost } from '../api';


function Dashboard() {
    const [socialEvents, setSocialEvents] = useState([]);
    const firstName = sessionStorage.getItem('firstName');
    const lastName = sessionStorage.getItem('lastName');

    return (
        <div className="container mx-auto py-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">User Dashboard</h1>
        <ul className="grid gap-4">
          {socialEvents.map((event) => (
            <li key={event.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{event.activity}</h3>
              <p className="text-gray-600 mt-2">{event.desc}</p>
              <p className="text-gray-700 mt-2">Location: {event.location}</p>
              <p className="text-gray-700">Date/Time: {event.date_time}</p>
              {/* Add other event details you want to display */}
            </li>
          ))}
        </ul>
        {/* Add navigation links or other content as needed */}
      </div>
    );
}
    
export default Dashboard;
    