// src/Register.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Registrierung erfolgreich!');
      setTimeout(() => {
        navigate('/login');
      }, 10000);
      navigate('/login');
    } catch (error) {
      setError(error.message);
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Register;
