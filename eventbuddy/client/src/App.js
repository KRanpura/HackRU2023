import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Post from './components/Post';
import Calendar from './components/Calendar';
import Social from './components/Social';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path = "/Signup" element = {<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Post" element = {<Post />} />
      <Route path="/Social" element = {<Social />} />
      <Route path="/Calendar" element = {<Calendar />} />

    </Routes>
    </BrowserRouter>

  );
}

export default App;