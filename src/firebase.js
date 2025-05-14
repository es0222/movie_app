// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1Ntnp7Ww_k_Iz6RtviBmUufYaxG8ZdCo",
  authDomain: "spotflix-d34ff.firebaseapp.com",
  projectId: "spotflix-d34ff",
  storageBucket: "spotflix-d34ff.firebasestorage.app",
  messagingSenderId: "1073227311606",
  appId: "1:1073227311606:web:c297ee1850421c49663fd7",
  measurementId: "G-HWFNRQJVX6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
