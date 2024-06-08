import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Internal from './internal';
import Login from './login';
import Register from './Register';
import UserInfo from './UserInfo';
import './App.css';

import Dashboard from './Dashboard';



function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Mein Versuch, eine Website zu bauen.</p>
          <nav>
            <Link to="/">Home</Link>
            {!user && <Link to="/register">Registrieren</Link>}
            {!user && <Link to="/login">Login</Link>}
            {user && <Link to="/dashboard">Dashboard</Link>}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/internal/*" element={<Internal />} />
          <Route path="/Dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>);
}

const LandingPage = () => (
  <div className="centered-container">
  <div className="form-container">
    <h3>Willkommen auf der Landingpage</h3>
    <Login />
    <p>Noch kein Konto? <a href="/register">Registrieren</a></p>
  </div>
  </div>
);
export default App;
