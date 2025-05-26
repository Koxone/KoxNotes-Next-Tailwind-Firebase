import React, { useState } from "react";
import { Router } from "next/navigation";

function Modal({
  mode = "",
  title = "",
  text = "",
  textConfirm = "",
  onCancel,
  onConfirm,
  icon = '',
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="flex flex-col items-center justify-center gap-4 max-w-md w-full
      bg-[var(--background)] rounded-lg p-4 border"
      >
        <div className="flex gap-3 border-b border-neutral-700 w-full">
          <div className="w-10 h-10">
            <img
              className="w-full h-full"
              src={`/assets/images/icon-${icon}-${mode}.svg`}
              alt="icon"
            />
          </div>
          <div className="mb-3">
            <p className="text-sm text-[var(--color)] font-semibold">{title}</p>
            <p className="text-xs">{text}</p>
          </div>
        </div>
        <div className="flex gap-3 self-end">
          <button
            onClick={onCancel}
            className="border border-[var(--secondaryBackground)] hover:bg-neutral-500 rounded-lg p-3 bg-[var(--hover)] cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="border bg-red-700 hover:bg-red-500 p-3 rounded-lg cursor-pointer"
          >
            {textConfirm}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
