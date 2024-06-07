import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Internal from './internal';
import Login from './login';
import './App.css';
 
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Mein Versuch, eine Website zu bauen.</p>
        </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/internal" element={<Internal />} />
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
