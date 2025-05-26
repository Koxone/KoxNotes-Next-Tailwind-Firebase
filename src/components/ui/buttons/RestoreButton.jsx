import React, { useState } from "react";
import useThemeMode from "../../../hooks/useThemeMode";
import { unarchiveNote } from "@/utils/unarchiveNote";
import Modal from "@/components/feedback/Modal";

function RestoreButton({ icon = "", styles = "", noteId = "", onSuccess }) {
  const mode = useThemeMode();
  const [showModal, setShowModal] = useState(false);

  const handleConfirmRestore = async () => {
    try {
      await unarchiveNote(noteId);
      onSuccess?.();
    } catch (error) {
      console.error("Error al restaurar la nota", error);
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`w-[18px] h-[18px] cursor-pointer ${styles} hover:scale-150 transition-transform duration-200 ease-in-out`}
      >
        <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
      </button>

      {showModal && (
        <Modal
          mode={mode}
          icon="restore"
          title="Restaurar nota"
          text="¿Quieres restaurar esta nota? Se moverá de nuevo a tus notas activas."
          textConfirm="Restaurar"
          onCancel={() => setShowModal(false)}
          onConfirm={handleConfirmRestore}
        />
      )}
    </>
  );
}

export default RestoreButton;
