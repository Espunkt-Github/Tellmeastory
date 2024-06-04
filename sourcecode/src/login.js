// src/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/internal');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Passwort" 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
