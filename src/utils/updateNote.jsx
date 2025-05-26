import { doc, updateDoc } from "firebase/firestore";
import { db } from "/firebase/firebaseConfig";

export async function updateNote(noteId, updatedData) {
  const noteRef = doc(db, "notes", noteId);
  await updateDoc(noteRef, {
    ...updatedData,
    lastEdited: new Date(),
  });
}
