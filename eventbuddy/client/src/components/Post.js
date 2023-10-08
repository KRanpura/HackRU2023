
import React, { useState, useEffect } from 'react';
import { Link } from 'react-reactor-dom';
import { useNavigate } from 'react-router-dom';
import { updatePost } from '../api';
function Post() {
    const [activity, setActivity] = useState('');
    const [interest, setInterest] = useState('');
    const [desc, setDesc] = useState('');
    const [location, setLocation] = useState('');
    const [submitDate, setSubmitDate] = useState(null);
  
    const handlePost = async (e) => {
      e.preventDefault();
  
      // Get the current date and time as a string
      const currentDateTime = new Date().toLocaleString();
  
      // Create the post object with the form data and submission date
      const post = {
        interest,
        activity,
        desc,
        location,
        date_time: currentDateTime,
      };
      console.log(post);
      // Send the post data to your API for further processing
      const response = await updatePost(post);
      console.log(response);
      // Handle the API response or any other actions as needed
  
      // Clear the form fields after submission
      setActivity('');
      setInterest('');
      setDesc('');
      setLocation('');
      setSubmitDate(currentDateTime);
    };
  
    const handleInterestChange = (event) => {
      // Update the 'interest' state with the selected option's value
      setInterest(event.target.value);
    };
  
    return (
      <div className="post">
        <h1>Make a Post</h1>
        <form onSubmit={handlePost}>
          <label>
            <input
              className="form-control"
              type="text"
              id="activity"
              name="activity"
              value={activity}
              onChange={(event) => setActivity(event.target.value)}
              placeholder="Activity"
            />
            What event do you want to attend?
          </label>
          <label>
            <input
              className="form-control"
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Location"
            />
            Location:
          </label>
          <label>
            <select
              name="interest"
              id="interest"
              value={interest}
              onChange={handleInterestChange}
            >
              <option value="" disabled>
                Choose an interest
              </option>
              <option value="social">Social Event</option>
              <option value="academic">Academic Event</option>
              <option value="service">Service Event</option>
              <option value="career">Career Event</option>
            </select>
            Choose an interest category:
          </label>
          <label>
            <input
              className="form-control"
              type="text"
              id="desc"
              name="desc"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              placeholder="Description"
            />
            Describe the Event:
          </label>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
        {submitDate && (
          <div>
            Post submitted on: {submitDate}
          </div>
        )}
      </div>
    );
  }
  
  export default Post;