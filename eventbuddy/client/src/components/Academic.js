import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {addEventAttendees} from '../api'
import { getPost } from '../api';
import { useNavigate } from 'react-router-dom';
function Academic() {
  const nav = useNavigate();
  const [academicEvents, setAcademicEvents] = useState([]);
  const userEmail = sessionStorage.getItem('email');
  const userName = sessionStorage.getItem('name'); 
  useEffect(() => {
    // Fetch social events when the component mounts
    async function fetchAcademicEvents() {
      try {
        const response = await getPost('academic');
        if (response.status === 200) {
          setAcademicEvents(response.data); // Update the state with social events
        }
      } catch (error) {
        console.error('Error fetching academic events:', error);      }
    }

    fetchAcademicEvents();
  }, []);
  const handleAttendingClick = (eventId) => {
    const response = addEventAttendees(userEmail,userName,eventId)
    console.log(response);
    nav('/Dashboard');
};

  return (
    <div className="container mx-auto py-8 text-center">
    <h1 className="text-3xl font-semibold mb-4">Academic Events</h1>
    <ul className="grid gap-4">
    {academicEvents.map((event) => (
        <li key={event.id} className="border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{event.activity}</h3>
          <p className="text-gray-600 mt-2">{event.desc}</p>
          <p className="text-gray-700 mt-2">Location: {event.location}</p>
          <p className="text-gray-700">Date/Time: {event.date_time}</p>
          {/* Add other event details you want to display */}
          <button
            onClick={() => handleAttendingClick(event.id)}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Attending
          </button>
        </li>
      ))}
    </ul>
    {/* Add navigation links or other content as needed */}
  </div>
  );
}

export default Academic;
