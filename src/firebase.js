// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWmIohA78qFDYIvM1Z_83D2lEE_zpZZq8",
  authDomain: "mynodeaminportal.firebaseapp.com",
  projectId: "mynodeaminportal",
  storageBucket: "mynodeaminportal.appspot.com",
  messagingSenderId: "747711163768",
  appId: "1:747711163768:web:4357c880d6c781693fac8d",
  measurementId: "G-T30HF2QVZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;