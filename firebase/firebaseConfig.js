// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkvuQNgI6Q5f_ETvBwzIpdKauvaUjCJoQ",
  authDomain: "koxnotes-7e3ef.firebaseapp.com",
  projectId: "koxnotes-7e3ef",
  storageBucket: "koxnotes-7e3ef.firebasestorage.app",
  messagingSenderId: "285938645279",
  appId: "1:285938645279:web:3b1ea31104198e111e582a",
  measurementId: "G-HW1VSEMF38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };