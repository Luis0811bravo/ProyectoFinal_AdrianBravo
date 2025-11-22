// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuQTJY_s6hY_Zckz1vLX-BySDP_m9kcJA",
  authDomain: "proyecto-final-ch-f8c43.firebaseapp.com",
  projectId: "proyecto-final-ch-f8c43",
  storageBucket: "proyecto-final-ch-f8c43.firebasestorage.app",
  messagingSenderId: "539816704892",
  appId: "1:539816704892:web:42d29f739e8361a53e82f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);