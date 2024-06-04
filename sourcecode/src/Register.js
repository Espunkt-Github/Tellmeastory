// src/Register.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      history.push('/internal');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Registrieren</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Registrieren</button>
      </form>
    </div>
  );
};

export default Register;
