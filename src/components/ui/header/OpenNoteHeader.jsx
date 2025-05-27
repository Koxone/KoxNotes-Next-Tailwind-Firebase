"use client";
import React from "react";
import DeleteButton from "../buttons/DeleteButton";
import ArchiveButton from "../buttons/ArchiveButton";
import CancelButton from "../buttons/CancelButton";
import SaveNoteButton from "../buttons/SaveNoteButton";
import GoBackButton from "../buttons/GoBackButton";
import RestoreButton from "../buttons/RestoreButton";

import { useRouter } from "next/navigation";
import { useToast } from "@/context/ToastContext";

function OpenNoteHeader({
  onSave,
  noteId,
  styles = "",
  saveText = "",
  archived = false,
}) {
  const router = useRouter();
  const { showToast } = useToast();

  const goTo = () => {
    router.push("/");
  };

  return (
    <div
      className={`flex items-center justify-center w-full px-4 py-3 border-b border-neutral-800 mb-3 -ml-2 ${styles}`}
    >
      <GoBackButton
        styles="mr-[60px]"
        goTo={goTo}
        icon="arrow-left"
        mode="darkMode"
        alt="Go back"
      />
      <DeleteButton
        icon="delete"
        mode="darkMode"
        styles="mr-[16px]"
        noteId={noteId}
        onSuccess={() => {
          router.push("/");
          showToast("Note deleted successfully");
        }}
      />
      {archived ? (
        <RestoreButton
          icon="restore"
          mode="darkMode"
          styles="mr-[16px]"
          noteId={noteId}
          onSuccess={() => {
            router.push("/");
            showToast("Note restored successfully");
          }}
        />
      ) : (
        <ArchiveButton
          icon="archive"
          mode="darkMode"
          styles="mr-[16px]"
          noteId={noteId}
          onSuccess={() => {
            router.push("/");
            showToast("Note archived successfully");
          }}
        />
      )}
      <CancelButton styles="mr-[32px]" />
      <SaveNoteButton
        onClick={onSave}
        onSuccess={() => {
          router.back();
          showToast(`${saveText}`);
        }}
      />
    </div>
  );
}

export default OpenNoteHeader;
