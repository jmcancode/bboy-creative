// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8LBEpP1_luy4WGB35L3jKefwRJYnsKto",
  authDomain: "bboyio.firebaseapp.com",
  projectId: "bboyio",
  storageBucket: "bboyio.appspot.com",
  messagingSenderId: "1004942561588",
  appId: "1:1004942561588:web:8a8ee4f93dc0fcf0a59561",
  measurementId: "G-3C8H0F0SWQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
