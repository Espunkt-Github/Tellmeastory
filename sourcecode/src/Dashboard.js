import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logout from './Logout';
import './App.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <header>
          <h2>Dashboard</h2>
          <Logout />
          <nav>
            <Link to="usermanagement">Userverwaltung</Link>
            <Link to="questions">Fragen</Link>
          </nav>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;