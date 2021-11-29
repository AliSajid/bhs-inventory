// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.firebaseDevApiKey,
  authDomain: "bhs-inventory-dev.firebaseapp.com",
  projectId: "bhs-inventory-dev",
  storageBucket: "bhs-inventory-dev.appspot.com",
  messagingSenderId: "366807977849",
  appId: "1:366807977849:web:65d6a2d683ac47271d69a8",
  measurementId: "G-P5VXY7RCG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);