import React from "react";
import { deleteNote } from "@/utils/deleteNote";
import useThemeMode from "../../../hooks/useThemeMode";

function DeleteButton({
  icon = "",
  styles = "",
  noteId = "",
  onSuccess,
}) {
  const mode = useThemeMode();
  const handleClick = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this note?");
    if (!confirmDelete) return;

    try {
      await deleteNote(noteId);
      onSuccess?.(); // Si existe onSuccess, se ejecuta
    } catch (error) {
      alert("Error deleting the note");
      console.error(error);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`w-[18px] h-[18px] ${styles} cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out`}
    >
      <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
    </button>
  );
}

export default DeleteButton;
