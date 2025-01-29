// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "first-app-e77e7.firebaseapp.com",
  projectId: "first-app-e77e7",
  storageBucket: "first-app-e77e7.firebasestorage.app",
  messagingSenderId: "407806797470",
  appId: "1:407806797470:web:44e88a55d42f12d7b3bd8f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
