import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {addEventAttendees} from '../api'
import { getPost } from '../api';

function Social() {
  const [socialEvents, setSocialEvents] = useState([]);
  const userEmail = sessionStorage.getItem('email');
  const userName = sessionStorage.getItem('name'); 
  useEffect(() => {
    // Fetch social events when the component mounts
    async function fetchSocialEvents() {
      try {
        const response = await getPost('social');
        if (response.status === 200) {
          setSocialEvents(response.data); // Update the state with social events
        }
      } catch (error) {
        console.error('Error fetching social events:', error);
      }
    }

    fetchSocialEvents();
  }, []);
  const handleAttendingClick = (eventId) => {
    const response = addEventAttendees(userEmail,userName,eventId)
    console.log(response);
};

  return (
    <div className="social">
      <h1>Social Events</h1>
      <ul>
        {socialEvents.map((event) => (
          <li key={event.id}>
            <h3>{event.activity}</h3>
            <p>{event.desc}</p>
            <p>Location: {event.location}</p>
            <p>Date/Time: {event.date_time}</p>
            {/* Add other event details you want to display */}
            <button onClick={() => handleAttendingClick(event.id)}>Attending</button>
          </li>
        ))}
      </ul>
      {/* Add navigation links or other content as needed */}
    </div>
  );
}

export default Social;
