// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBx7oDfb_o_6YdwjxR3HdhZJoQFOBd0dE",
  authDomain: "ecommerce-website-practice.firebaseapp.com",
  projectId: "ecommerce-website-practice",
  storageBucket: "ecommerce-website-practice.appspot.com",
  messagingSenderId: "296518237115",
  appId: "1:296518237115:web:7f16bdf76fea9123a3a29e",
  measurementId: "G-PV9DFVBD3L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
