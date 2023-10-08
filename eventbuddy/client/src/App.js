import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path = "/Signup" element = {<Signup />} />
      <Route path="/Login" element={<Login />} />

    </Routes>
    </BrowserRouter>

  );
}

export default App;