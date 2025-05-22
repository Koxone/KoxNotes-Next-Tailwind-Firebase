"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../../../firebase/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";

export default function TestPage() {
  const [user, setUser] = useState(null);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Detectar usuario logueado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });
    return () => unsubscribe();
  }, []);

  // Login
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (e) {
      alert("Error al iniciar sesión: " + e.message);
    }
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    setNotes([]);
  };

  // Guardar nota
  const saveNote = async () => {
    if (!user) return;
    try {
      const notesRef = collection(db, "notes");
      await addDoc(notesRef, {
        userId: user.uid,
        content: note,
        createdAt: Timestamp.now(),
      });
      setNote("");
      loadNotes();
    } catch (e) {
      alert("Error guardando nota: " + e.message);
    }
  };

  // Cargar notas del usuario
  const loadNotes = async () => {
    if (!user) return;
    const q = query(collection(db, "notes"), where("userId", "==", user.uid));
    const snapshot = await getDocs(q);
    const loadedNotes = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setNotes(loadedNotes);
  };

  // Recargar notas al iniciar sesión
  useEffect(() => {
    if (user) {
      loadNotes();
    }
  }, [user]);

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      {!user ? (
        <div className="flex flex-col gap-2">
          <input
            className="border p-2"
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border p-2"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={login}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Iniciar sesión
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="text-green-600">Sesión activa: {user.email}</p>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cerrar sesión
          </button>

          <textarea
            className="border p-2 w-full"
            placeholder="Escribe una nota..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button
            onClick={saveNote}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Guardar nota
          </button>

          <div className="mt-4">
            <h2 className="font-bold">Tus notas:</h2>
            <ul className="list-disc pl-5">
              {notes.map((n) => (
                <li key={n.id}>{n.content}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
