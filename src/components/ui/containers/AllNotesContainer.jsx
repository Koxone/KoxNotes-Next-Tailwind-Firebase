"use client";
import React, { useEffect, useState } from "react";
import CloseNote from "@/components/ui/cards/CloseNote";
import { getUserNotes } from "/src/utils/getUserNotes";
import toast from "@/components/feedback/Toast";

export default function AllNotesContainer({
  context = "home",
  searchValue = "",
}) {
  let emptyText = "";
  if (context === "home") {
    emptyText =
      "You don't have any notes yet. Start a new note to capture your thoughts and ideas.";
  } else if (context === "tags") {
    emptyText =
      "You don't have any tags saved yet. Start a new note to capture your thoughts and ideas.";
  } else if (context === "archive") {
    emptyText =
      "You don't have any notes in your archive yet. Start a new note to capture your thoughts and ideas.";
  } else if (context === "search") {
    emptyText =
      "You don't have any notes to search yet. Start a new note to capture your thoughts and ideas.";
  }

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function loadNotes() {
      const userNotes = await getUserNotes();
      setNotes(userNotes);
    }
    loadNotes();
  }, []);

  const filteredNotes = notes.filter((note) => {
    const content =
      `${note.title} ${note.content || ""} ${note.tags?.join("") || ""}`.toLowerCase();
    return content.includes(searchValue.toLowerCase());
  });

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      {notes.length === 0 ? (
        <div
          style={{ backgroundColor: "var(--secondaryBackground)" }}
          className="w-full rounded-sm flex justify-center items-center p-3"
        >
          <p
            style={{ color: "var(--color)" }}
            className="text-center text-sm leading-[130%]"
          >
            {emptyText}
          </p>
        </div>
      ) : (
        filteredNotes.map((note) => (
          <CloseNote
            key={note.id}
            id={note.id}
            title={note.title}
            date={note.dateText || note.timeText || ""}
            tags={note.tags || []}
          />
        ))
      )}
    </div>
  );
}
