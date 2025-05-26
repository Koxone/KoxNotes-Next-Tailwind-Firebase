import { db } from "/firebase/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export async function deleteNote(noteId) {
  try {
    const noteRef = doc(db, "notes", noteId);
    await deleteDoc(noteRef);
    console.log("Note deleted successfully");
  } catch (error) {
    console.error("Error deleting note:", error);
    throw new Error("Error deleting note");
  }
}