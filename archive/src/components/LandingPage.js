// src/components/LandingPage.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function LandingPage() {
  const history = useHistory();

  const goToGoogleSignIn = () => history.push('/google-signin');
  const goToLogin = () => history.push('/login');
  const goToRegister = () => history.push('/register');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Deine Fragen, deine Antworten</h1>
      <div style={{ marginTop: '20px' }}>
        <button onClick={goToGoogleSignIn}>Anmeldung mit Google</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={goToLogin}>Anmeldung mit Benutzername</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={goToRegister}>Registrieren</button>
      </div>
    </div>
  );
}

export default LandingPage;
