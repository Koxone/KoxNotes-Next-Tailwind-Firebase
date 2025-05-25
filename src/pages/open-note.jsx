"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "/firebase/firebaseConfig";

// Componentes UI
import OpenNoteHeader from "@/components/ui/header/OpenNoteHeader";
import MainTitle from "@/components/ui/text/main/MainTitle";
import OpenNoteInfoCard from "@/components/ui/cards/OpenNoteInfoCard";
import NoteTextArea from "@/components/ui/inputs/NoteTextArea";
import Header from "@/components/ui/header/Header";
import PageHead from "@/components/common/PageHead";

function OpenNoteScreen() {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const noteId = localStorage.getItem("selectedNoteId");

    if (!noteId) {
      alert("No hay nota seleccionada.");
      return;
    }

    const fetchNote = async () => {
      try {
        const docRef = doc(db, "notes", noteId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNote(docSnap.data());
        } else {
          alert("Nota no encontrada.");
        }
      } catch (error) {
        console.error("Error cargando la nota:", error);
        alert("Error cargando la nota.");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, []);

  if (loading) {
    return <p className=" p-4">Cargando nota...</p>;
  }

  if (!note) {
    return <p className=" p-4">Nota no encontrada.</p>;
  }

  return (
    <>
      <PageHead title={note.title} description="KoxNotes" />
      <div className="w-full h-screen flex flex-col overflow-hidden rounded-lg">
        <Header />
        <div className="w-full h-screen flex flex-col bg-[var(--foreground)]">
          <OpenNoteHeader styles="sticky top-0" />
          <div className="px-3">
            <MainTitle text={note.title || "Sin título"} styles=" ml-2 mb-5" />
          </div>
          <div className="px-3">
            <OpenNoteInfoCard
              icon="tag"
              mode="darkMode"
              date={`${note.dateText || ""} ${note.timeText || ""}`}
              tags1={note.tags?.[0] || ""}
              tag2={note.tags?.[1] || ""}
              text1="Tags"
              text2="Last Edited"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <NoteTextArea value={note.content} onChange={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenNoteScreen;
