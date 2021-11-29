// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI_bscv9tdXF3ycPTOdV8QCivfp16BbaM",
  authDomain: "bhs-inventory-production.firebaseapp.com",
  projectId: "bhs-inventory-production",
  storageBucket: "bhs-inventory-production.appspot.com",
  messagingSenderId: "787990486544",
  appId: "1:787990486544:web:05296953c634c5871c7495",
  measurementId: "G-7PRBKEJKM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);