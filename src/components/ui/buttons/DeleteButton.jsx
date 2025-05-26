import React, { useState } from "react";
import { deleteNote } from "@/utils/deleteNote";
import useThemeMode from "../../../hooks/useThemeMode";
import Modal from "@/components/feedback/Modal";

function DeleteButton({ icon = "", styles = "", noteId = "", onSuccess }) {
  const mode = useThemeMode();
  const [showModal, setShowModal] = useState(false);

  const handleConfirmDelete = async () => {
    try {
      await deleteNote(noteId);
      onSuccess?.();
    } catch (error) {
      console.error("Error deleting the note", error);
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`w-[18px] h-[18px] ${styles} cursor-pointer hover:scale-150 transition-transform duration-200 ease-in-out`}
      >
        <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
      </button>

      {showModal && (
        <Modal
          mode={mode}
          icon="delete"
          title="Eliminar nota"
          text="¿Estás seguro de que deseas eliminar esta nota? Esta acción no se puede deshacer."
          textConfirm="Eliminar"
          onCancel={() => setShowModal(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}

export default DeleteButton;
