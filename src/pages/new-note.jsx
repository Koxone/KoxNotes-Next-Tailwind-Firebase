//React
"use client";
import { useState } from "react";

//Function
import { saveNote } from "@/utils/SaveNote";

//Components
import OpenNoteHeader from "@/components/ui/header/OpenNoteHeader";
import NewNoteInfoCard from "@/components/ui/cards/NewNoteInfoCard";
import NoteTextArea from "@/components/ui/inputs/NoteTextArea";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import NewNoteTitleInput from "@/components/ui/inputs/NewNoteTitleInput";
import PageHead from "@/components/common/PageHead";

export default function NewNoteScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagsText, setTagsText] = useState("");
  const [id, setId] = useState("");

  const handleSaveNote = async () => {
    const uniqueId = crypto.randomUUID();
    setId(uniqueId);
    const tags = tagsText
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    const now = new Date();
    const dateText = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const timeText = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    try {
      await saveNote(title, content, tags, dateText, timeText, uniqueId);
      alert("Note saved successfully!");
      setTitle("");
      setContent("");
      setTagsText("");
      setId("");
    } catch (error) {
      alert("Error saving note:", +error.message);
      console.error("Error saving note:", error);
    }
  };

  return (
    <>
      <PageHead title="New Note" />
      <div className="w-full h-screen flex flex-col overflow-hidden rounded-lg">
        <Header />
        <div className="w-full h-screen flex flex-col justify-center rounded-xl bg-[var(--foreground)]">
          <OpenNoteHeader onSave={handleSaveNote} />
          <div className="flex flex-col items-center justify-center px-3">
            <NewNoteTitleInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <NewNoteInfoCard
              tagsText={tagsText}
              onChange={(e) => setTagsText(e.target.value)}
              mode="darkMode"
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
