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
        <h2 className="text-2xl font-semibold mb-4">{firstName}'s calendar of events:</h2>
        <div><iframe src="https://calendar.google.com/calendar/embed?src=ba0fd92a140457dae6d388c44e8207508442b36d80324847389e6e6c6fd33510%40group.calendar.google.com&ctz=America%2FNew_York" 
        style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe></div>
        <h2>Events you are attending:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {userEvents.map((event) => (
          <div key={event.id} className="border rounded-lg shadow-md text-left p-4">
            <h3 className="text-xl font-semibold">{event.activity}</h3>
            <p className="text-gray-600 mt-2">{event.desc}</p>
            <p className="text-gray-700 mt-2">Location: {event.location}</p>
            <p className="text-gray-700">Date/Time: {event.date_time}</p>
            {/* Add other event details you want to display */}
          </div>
        ))}
      </div>
      <h2>Events you made:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {creatorEvents.map((event) => (
          <div key={event.id} className="border rounded-lg shadow-md text-left p-4">
            <h3 className="text-xl font-semibold">{event.activity}</h3>
            <p className="text-gray-600 mt-2">{event.desc}</p>
            <p className="text-gray-700 mt-2">Location: {event.location}</p>
            <p className="text-gray-700">Date/Time: {event.date_time}</p>
            {/* Add other event details you want to display */}
          </div>
        ))}
      </div>
        {/* Add navigation links or other content as needed */}
      </div>
    );
}
    
export default Dashboard;
    