"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "/firebase/firebaseConfig";

import OpenNoteHeader from "@/components/ui/header/OpenNoteHeader";
import MainTitle from "@/components/ui/text/main/MainTitle";
import OpenNoteInfoCard from "@/components/ui/cards/OpenNoteInfoCard";
import NoteTextArea from "@/components/ui/inputs/NoteTextArea";
import Header from "@/components/ui/header/Header";
import PageHead from "@/components/common/PageHead";
import { updateNote } from "@/utils/updateNote"; 

function OpenNoteScreen() {
  const [note, setNote] = useState(null);
  const [noteId, setNoteId] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedId = localStorage.getItem("selectedNoteId");
    setNoteId(storedId);

    if (!storedId) {
      alert("No hay nota seleccionada.");
      return;
    }

    const fetchNote = async () => {
      try {
        const docRef = doc(db, "notes", storedId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setNote(data);
          setContent(data.content || "");
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

  const handleSave = async () => {
    if (!noteId) {
      alert("No se encontró el ID de la nota.");
      return;
    }

    await updateNote(noteId, {
      title: note.title,
      content,
      tags: note.tags || [],
      dateText: note.dateText,
      timeText: note.timeText,
    });
  };

  if (loading) return <p className="p-4">Cargando nota...</p>;
  if (!note) return <p className="p-4">Nota no encontrada.</p>;

  return (
    <>
      <PageHead title={note.title} description="KoxNotes" />
      <div className="w-full h-screen flex flex-col overflow-hidden rounded-lg relative">
        <Header />
        <div className="w-full h-screen flex flex-col bg-[var(--foreground)]">
          <OpenNoteHeader
            onSave={handleSave}
            noteId={noteId}
            styles="sticky top-0"
            saveText="Note updated successfully"
            archived={note.archived || false}
          />
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
            <NoteTextArea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenNoteScreen;
