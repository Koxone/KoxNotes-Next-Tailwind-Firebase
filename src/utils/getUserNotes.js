import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { auth, db } from "/firebase/firebaseConfig";

export async function getUserNotes(filter = {}) {
  const user = auth.currentUser;
  if (!user) return [];

  const conditions = [where("userId", "==", user.uid)];

  for (const [key, value] of Object.entries(filter)) {
    conditions.push(where(key, "==", value));
  }

  conditions.push(orderBy("createdAt", "desc"));

  const q = query(collection(db, "notes"), ...conditions);

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
