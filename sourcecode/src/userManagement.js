// src/UserManagement.js
import React, { useState, useEffect } from 'react';
import { auth, db } from './firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import './App.css';

const UserManagement = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    birthDate: '',
    street: '',
    postalCode: '',
    city: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await setDoc(doc(db, 'users', user.uid), userData);
      alert('Daten gespeichert');
    }
  };

  if (loading) {
    return <p>Laden...</p>;
  }

  return (
    <div className="form-container">
      <h2>Benutzerverwaltung</h2>
      <p>Email: {user && user.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="date"
          name="birthDate"
          value={userData.birthDate}
          onChange={handleChange}
          placeholder="Geburtsdatum"
          required
        />
        <input
          type="text"
          name="street"
          value={userData.street}
          onChange={handleChange}
          placeholder="Straße"
          required
        />
        <input
          type="text"
          name="postalCode"
          value={userData.postalCode}
          onChange={handleChange}
          placeholder="Postleitzahl"
          required
        />
        <input
          type="text"
          name="city"
          value={userData.city}
          onChange={handleChange}
          placeholder="Ort"
          required
        />
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
};

export default UserManagement;
