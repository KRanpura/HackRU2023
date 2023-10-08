
import React, { useState, useEffect } from 'react';
import { updatePost } from '../api';
const { v4: uuidv4 } = require('uuid'); //make sure to import this
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
        id: uuidv4(),
        activity,
        interest,
        activity,
        desc,
        location,
        date_time: currentDateTime,
        creator: sessionStorage.getItem('email')
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
          What event do you want to attend?
            <input
              className="form-control"
              type="text"
              id="activity"
              name="activity"
              value={activity}
              onChange={(event) => setActivity(event.target.value)}
              placeholder="Activity"
            />
          </label>
          <label>
          Location:
            <input
              className="form-control"
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Location"
            />
          </label>
          <label>
          Choose an interest category:
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

          </label>
          <label>
          Describe the Event:
            <input
              className="form-control"
              type="text"
              id="desc"
              name="desc"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              placeholder="Description"
            />
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