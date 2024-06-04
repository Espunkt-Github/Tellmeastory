// src/components/GoogleSignIn.js
import React from 'react';
import { auth, provider, signInWithPopup, setDoc, doc, db } from '../firebaseConfig';

function GoogleSignIn() {
  const onSuccess = async (result) => {
    const user = result.user;
    const userDocRef = doc(db, 'users', user.uid);

    // Benutzerinformationen in Firestore speichern
    await setDoc(userDocRef, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      createdAt: new Date(),
    }, { merge: true });

    console.log('Login Success: currentUser:', user);
  };

  const onFailure = (error) => {
    console.log('Login Failed:', error);
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      onSuccess(result);
    } catch (error) {
      onFailure(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Anmeldung mit Google</button>
    </div>
  );
}

export default GoogleSignIn;
