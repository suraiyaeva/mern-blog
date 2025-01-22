// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-40ff0.firebaseapp.com",
  projectId: "mern-blog-40ff0",
  storageBucket: "mern-blog-40ff0.firebasestorage.app",
  messagingSenderId: "276090589879",
  appId: "1:276090589879:web:cb436a2afe2f156936b332",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
