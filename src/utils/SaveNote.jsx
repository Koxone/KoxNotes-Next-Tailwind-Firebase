import { collection, addDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "/firebase/firebaseConfig";

export async function saveNote(title, content, tags = [], dateText, timeText) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const noteData = {
    user: user.displayName || user.email,
    title,
    content,
    createdAt: new Date(),
    tags,
    userId: user.uid,
    dateText,
    archived: false,
    timeText,
    lastEdited: new Date(),
  };

  const docRef = await addDoc(collection(db, "notes"), noteData);

  await updateDoc(docRef, { id: docRef.id });

  return docRef.id;
}
