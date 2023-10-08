import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser} from '../api';
import { useNavigate } from 'react-router-dom';
import { getRutgersEvents } from '../api';
function Signup() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [interests, setInterests] = useState([]);
  const nav = useNavigate();
  const resets = sessionStorage.setItem('resets', 0)
  const handleNext = () => {
    // Validate input and proceed to the next step
    if (step === 1) {
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
    } else if (step === 2) {
        if(interests.length ===0)
        {
            alert('Please selectat least one interest.');
            return;
        }
    }

    // Proceed to the next step
    setStep(step + 1);
  };
  
  const handleInterestChange = (event) => {
    // Toggle the interests checkbox selections
    const interest = event.target.value;
    if (interests.includes(interest)) {
      setInterests(interests.filter((item) => item !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
      const user = { firstName, lastName, email, password, interests};
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('firstName',firstName);
      sessionStorage.setItem('lastName',lastName);
      sessionStorage.setItem('password', password);

      const response = await createUser(user);
      if (response.status===200)
      {

        nav('/Post');

      }
      console.log(response);
      // code to redirect the user to their dashboard goes here

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg bg-white p-12 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-medium">
                First Name:
              </label>
              <input
                className="form-input w-full mt-1"
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-medium">
                Last Name:
              </label>
              <input
                className="form-input w-full mt-1"
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email:
              </label>
              <input
                className="form-input w-full mt-1"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password:
              </label>
              <input
                className="form-input w-full mt-1"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">
                Confirm Password:
              </label>
              <input
                className="form-input w-full mt-1"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>
            <button
              type="button"
              className="btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
              onClick={handleNext}
            >
              Next
            </button>
            <div className="mt-3 text-gray-700">
              Already have an account? <Link to="/Login">Log in</Link>
            </div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit}>
            {/* Step 2: Collect user interests */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Interests:</label>
              <div>
                <label className="inline-flex items-center mt-1">
                  <input
                    type="checkbox"
                    value="social"
                    onChange={handleInterestChange}
                    checked={interests.includes('social')}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />{' '}
                  Social Events
                </label>
              </div>
              <div>
                <label className="inline-flex items-center mt-1">
                  <input
                    type="checkbox"
                    value="academic"
                    onChange={handleInterestChange}
                    checked={interests.includes('academic')}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />{' '}
                  Academic Events
                </label>
              </div>
              <div>
                <label className="inline-flex items-center mt-1">
                  <input
                    type="checkbox"
                    value="service"
                    onChange={handleInterestChange}
                    checked={interests.includes('service')}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />{' '}
                  Service Events
                </label>
              </div>
              <div>
                <label className="inline-flex items-center mt-1">
                  <input
                    type="checkbox"
                    value="career"
                    onChange={handleInterestChange}
                    checked={interests.includes('career')}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />{' '}
                  Career Events
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Next
            </button>
            <button
              type="button"
              className="btn-secondary bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-lg ml-2"
              onClick={() => setStep(step - 1)}
            >
              Previous
            </button>
            <div className="mt-3 text-gray-700">
              Already have an account? <Link to="/Login">Log in</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Signup;
