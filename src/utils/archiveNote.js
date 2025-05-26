import { doc, updateDoc } from "firebase/firestore";
import { db } from "/firebase/firebaseConfig";
import { getAuth } from "firebase/auth";

export const archiveNote = async (noteId) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Usuario no autenticado");
  }

  const noteRef = doc(db, "notes", noteId);

  await updateDoc(noteRef, {
    archived: true,
  });
};
