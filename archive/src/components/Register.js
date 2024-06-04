// src/components/Register.js
import React, { useState } from 'react';
import { auth, db, doc, setDoc } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Benutzerinformationen in Firestore speichern
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        username: username,
        createdAt: new Date(),
      });
      alert('Registrierung erfolgreich!');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Fehler bei der Registrierung');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Benutzername:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Passwort:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Registrieren</button>
    </form>
  );
}

export default Register;
