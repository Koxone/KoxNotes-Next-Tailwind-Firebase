// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS3TjGeTaKGhrrVTrrzIyvB4a_HyKyGMI",
  authDomain: "koxnotes-379b5.firebaseapp.com",
  projectId: "koxnotes-379b5",
  storageBucket: "koxnotes-379b5.firebasestorage.app",
  messagingSenderId: "935105437936",
  appId: "1:935105437936:web:46d1e099cdc87ef550e235",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
