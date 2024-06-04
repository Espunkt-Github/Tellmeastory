// src/components/UserData.js
import React, { useEffect, useState } from 'react';
import { auth, db, doc, getDoc } from '../firebaseConfig';

function UserData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Willkommen {userData.name}</h1>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserData;
