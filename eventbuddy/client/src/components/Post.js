import React, { useState } from 'react';
import { updatePost } from '../api';
import { makeSms } from '../api';
const { v4: uuidv4 } = require('uuid');
function Post() {
  const [activity, setActivity] = useState('');
  const [interest, setInterest] = useState('');
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState('');
  const [submitDate, setSubmitDate] = useState(null);
  

  const handlePost = async (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toLocaleString();
    const post = {
      id: uuidv4(),
      activity,
      interest,
      desc,
      location,
      date_time: currentDateTime,
      creator: sessionStorage.getItem('email'),
    };

    const response = await updatePost(post);
    const response1 = await makeSms("Your event was posted online! We hope it goes well!");
    // Handle the API response or any other actions as needed

    setActivity('');
    setInterest('');
    setDesc('');
    setLocation('');
    setSubmitDate(currentDateTime);
  };

  const handleInterestChange = (event) => {
    setInterest(event.target.value);
  };

  return (
    <div className="post bg-white rounded-lg shadow-md p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Make a Post</h1>
      <form onSubmit={handlePost}>
        <div className="mb-2">
          <label htmlFor="activity" className="block text-gray-700 font-medium">
            What event do you want to attend?
          </label>
          <input
            className="form-input w-full mt-1"
            type="text"
            id="activity"
            name="activity"
            value={activity}
            onChange={(event) => setActivity(event.target.value)}
            placeholder="Activity"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="location" className="block text-gray-700 font-medium">
            Location:
          </label>
          <input
            className="form-input w-full mt-1"
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Location"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="interest" className="block text-gray-700 font-medium">
            Choose an interest category:
          </label>
          <select
            name="interest"
            id="interest"
            value={interest}
            onChange={handleInterestChange}
            className="form-select w-full mt-1"
          >
            <option value="" disabled>
              Choose an interest
            </option>
            <option value="social">Social Event</option>
            <option value="academic">Academic Event</option>
            <option value="service">Service Event</option>
            <option value="career">Career Event</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="desc" className="block text-gray-700 font-medium">
            Describe the Event:
          </label>
          <input
            className="form-input w-full mt-1 h-[50px]"
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            placeholder="Description"
          />
        </div>
        <button
          type="submit"
          className="btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Post
        </button>
      </form>
      {submitDate && (
        <div className="mt-4 text-gray-700">
          Post submitted on: {submitDate}
        </div>
      )}
    </div>
  );
}

export default Post;
