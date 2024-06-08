// src/UserInfo.js
import React from 'react';
import { auth } from './firebaseConfig';
import { Link } from 'react-router-dom';
import './App.css';

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      {user ? (
        <p>Angemeldet als {user.email}</p>
      ) : (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Registrieren</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
