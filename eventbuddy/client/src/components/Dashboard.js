import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {addEventAttendees, getAllUserEvents, getCreatorEvents} from '../api'
import { getPost } from '../api';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [userEvents, setUserEvents] = useState([]);
    const [creatorEvents, setCreatorEvents] = useState([]);
    const firstName = sessionStorage.getItem('firstName');
    const lastName = sessionStorage.getItem('lastName');
    const email = sessionStorage.getItem('email');
    useEffect(() => {
      // Fetch social events when the component mounts
      async function fetchUserEvents() {
        try {
          const response = await getAllUserEvents(email);
          if (response.status === 200) {
            setUserEvents(response.data); // Update the state with social events
          }
        } catch (error) {
          console.error('Error fetching career events:', error);
        }
      }
  
      fetchUserEvents();
    }, []);
    useEffect(() => {
      // Fetch social events when the component mounts
      async function fetchCreatorEvents() {
        try {
          const response = await getCreatorEvents(email);
          if (response.status === 200) {
            setCreatorEvents(response.data); // Update the state with social events
          }
        } catch (error) {
          console.error('Error fetching career events:', error);
        }
      }
  
      fetchCreatorEvents();
    }, []);
    return (
        <div className="container mx-auto py-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">User Dashboard</h1>
        <h2 className="text-2xl font-semibold mb-4">Hello {firstName} {lastName}!</h2>
        <ul className="grid gap-4">
          {userEvents.map((event) => (
            <li key={event.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{event.activity}</h3>
              <p className="text-gray-600 mt-2">{event.desc}</p>
              <p className="text-gray-700 mt-2">Location: {event.location}</p>
              <p className="text-gray-700">Date/Time: {event.date_time}</p>
              {/* Add other event details you want to display */}
            </li>
          ))}
        </ul>
        <ul>
        {creatorEvents.map((event) => (
            <li key={event.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{event.activity}</h3>
              <p className="text-gray-600 mt-2">{event.desc}</p>
              <p className="text-gray-700 mt-2">Location: {event.location}</p>
              <p className="text-gray-700">Date/Time: {event.date_time}</p>
            </li>
          ))}
        </ul>
        {/* Add navigation links or other content as needed */}
      </div>
    );
}
    
export default Dashboard;
    