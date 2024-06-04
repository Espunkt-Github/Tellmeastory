// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Hole das Root-Element
const container = document.getElementById('root');

// Erstelle die Root
const root = createRoot(container);

// Render die Anwendung
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);