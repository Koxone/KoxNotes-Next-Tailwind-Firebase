"use client";
import React from "react";
import DeleteButton from "../buttons/DeleteButton";
import ArchiveButton from "../buttons/ArchiveButton";
import CancelButton from "../buttons/CancelButton";
import SaveNoteButton from "../buttons/SaveNoteButton";
import GoBackButton from "../buttons/GoBackButton";

import { useRouter } from "next/navigation";
import { useToast } from "@/context/ToastContext";

function OpenNoteHeader({ onSave, noteId, styles = "" }) {
  const router = useRouter();
  const { showToast } = useToast();

  const goTo = () => {
    router.push("/");
  };

  return (
    <div
      className={`flex py-3 justify-center w-full px-4 border-b border-neutral-800 mb-3 ${styles}`}
    >
      <GoBackButton
        styles="mr-[60px]"
        goTo={goTo}
        icon="arrow-left"
        mode="darkMode"
      />
      <DeleteButton
        icon="delete"
        mode="darkMode"
        styles="mr-[16px]"
        noteId={noteId}
        onSuccess={() => {
          router.push("/");
          showToast("Nota eliminada correctamente");
        }}
      />
      <ArchiveButton icon="archive" mode="darkMode" styles="mr-[16px]" />
      <CancelButton styles="mr-[32px]" />
      <SaveNoteButton
        onClick={onSave}
        onSuccess={() => {
          router.back();
          showToast("Nota guardada correctamente");
        }}
      />
    </div>
  );
}

export default OpenNoteHeader;
