// src/components/AuthStatus.js
import React, { useEffect, useState } from 'react';
import { auth, signOut } from '../firebaseConfig';

function AuthStatus() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  if (!user) {
    return <div>Du bist nicht angemeldet.</div>;
  }

  return (
    <div>
      <p>Angemeldet als: {user.email}</p>
      <button onClick={handleSignOut}>Abmelden</button>
    </div>
  );
}

export default AuthStatus;
