// src/Internal.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UserManagement from './userManagement';
import './App.css';
import Questions from './Questions';

const Internal = () => {
  return (
    <div className="internal-container">
      <h2>interner Bereich</h2>
      <nav>
        <ul>
          <li><Link to="/internal/usermanagement">Userverwaltung</Link></li>
          <li><Link to="/internal/Questions">Fragen</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="usermanagement" element={<UserManagement />} />
        <Route path="Questions" element={<Questions />} />
      </Routes>
    </div>
  );
};

const questions = () => (
  <div className="form-container">
    <h2>Fragen</h2>
  </div>
);



export default Internal;
