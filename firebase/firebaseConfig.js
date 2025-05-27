import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS3TjGeTaKGhrrVTrrzIyvB4a_HyKyGMI",
  authDomain: "koxnotes-379b5.firebaseapp.com",
  projectId: "koxnotes-379b5",
  storageBucket: "koxnotes-379b5.firebasestorage.app",
  messagingSenderId: "935105437936",
  appId: "1:935105437936:web:46d1e099cdc87ef550e235",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
