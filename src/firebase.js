// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZfKXmF_uPU4SuhGb70I-6N17bNBEyZwo",
  authDomain: "react-auth-dashboard-97d03.firebaseapp.com",
  projectId: "react-auth-dashboard-97d03",
  storageBucket: "react-auth-dashboard-97d03.firebasestorage.app",
  messagingSenderId: "1004918939545",
  appId: "1:1004918939545:web:999532c45abb4610517d08"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase App
export const auth = getAuth(app); // Get Firebase Authentication instance


