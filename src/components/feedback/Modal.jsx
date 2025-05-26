import React from "react";

function Modal({ mode = "", title = "", text = "", textConfirm = "" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full bg-[var(--background)] rounded-lg p-3">
      <div className="flex gap-3 border-b border-neutral-700">
        <div className="w-10 h-10">
          <img
            className="w-full h-full"
            src={`/assets/images/icon-delete-${mode}.svg`}
            alt="icon"
          />
        </div>
        <div className="mb-3">
          <p className="text-sm text-[var(--color)] font-semibold">{title}</p>
          <p className="text-xs">{text}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="border border-[var(--secondaryBackground)] hover:bg-neutral-500 rounded-lg p-3 bg-[var(--hover)] cursor-pointer">
          Cancel
        </button>
        <button className="border bg-red-700 hover:bg-red-500 p-3 rounded-lg cursor-pointer">
          {textConfirm}
        </button>
      </div>
    </div>
  );
}

export default Modal;