// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.PREACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.PREACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.PREACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.PREACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.PREACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.PREACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.PREACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics();
export const db = getFirestore();
export const perf = getPerformance();
