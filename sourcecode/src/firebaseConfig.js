// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD1OFDoEVQ7P0TvOpsBr142wi_TIpz36TM",
    authDomain: "espunktstoryteller.firebaseapp.com",
    projectId: "espunktstoryteller",
    storageBucket: "espunktstoryteller.appspot.com",
    messagingSenderId: "701803127175",
    appId: "1:701803127175:web:c21ce1949c4614fb613322",
    measurementId: "G-RLGVN6EJD2"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
