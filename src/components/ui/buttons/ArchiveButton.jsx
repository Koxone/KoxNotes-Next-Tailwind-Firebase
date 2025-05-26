import React, { useState } from "react";
import useThemeMode from "../../../hooks/useThemeMode";
import { archiveNote } from "@/utils/archiveNote";
import Modal from "@/components/feedback/Modal";

function ArchiveButton({ icon = "", styles = "", noteId = "", onSuccess }) {
  const mode = useThemeMode();
  const [showModal, setShowModal] = useState(false);

  const handleConfirmArchive = async () => {
    try {
      await archiveNote(noteId);
      onSuccess?.();
    } catch (error) {
      console.error("Error al archivar la nota", error);
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`w-[18px] h-[18px] cursor-pointer ${styles}`}
      >
        <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
      </button>

      {showModal && (
        <Modal
          mode={mode}
          icon="archive"
          title="Archivar nota"
          text="¿Quieres archivar esta nota? Puedes encontrarla luego en la sección de archivos."
          textConfirm="Archivar"
          onCancel={() => setShowModal(false)}
          onConfirm={handleConfirmArchive}
        />
      )}
    </>
  );
}

export default ArchiveButton;
