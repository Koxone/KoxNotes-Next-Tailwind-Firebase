"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/firebase/firebaseConfig";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const [userChecked, setUserChecked] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserExists(true);
      } else {
        setUserExists(false);
        router.push("/auth/login");
      }
      setUserChecked(true);
    });

    return () => unsubscribe();
  }, [router]);

  if (!userChecked) return null;

  return userExists ? children : null;
}
