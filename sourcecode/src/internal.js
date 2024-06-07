// src/Internal.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UserManagement from './userManagement';
import './App.css';

const Internal = () => {
  return (
    <div className="internal-container">
      <h2>interner Bereich</h2>
      <nav>
        <ul>
          <li><Link to="/internal/usermanagement">Userverwaltung</Link></li>
          <li><Link to="/internal/questions">Fragen</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="usermanagement" element={<UserManagement />} />
        <Route path="questions" element={<Questions />} />
      </Routes>
    </div>
  );
};

const Questions = () => (
  <div className="form-container">
    <h2>Fragen</h2>
  </div>
);



export default Internal;
