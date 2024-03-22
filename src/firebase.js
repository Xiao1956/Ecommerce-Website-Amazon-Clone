import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
