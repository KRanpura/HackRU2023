import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Post from './components/Post';
import Calendar from './components/Calendar';
import Social from './components/Social';
import Service from './components/Service';
import Academic from './components/Service';
import Career from './components/Career';
import Navbar from './components/Navbar';

function App() {
  // Determine whether to display the Navbar based on the route
  const shouldDisplayNavbar = !['/Login', '/Signup'].includes(window.location.pathname);

  return (
    <BrowserRouter>
      {shouldDisplayNavbar && <Navbar />} {/* Render Navbar conditionally */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Social" element={<Social />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Academic" element={<Academic />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
