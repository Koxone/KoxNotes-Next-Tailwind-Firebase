import React from "react";

export default function Toast({ text = "" }) {
  return (
    <div className="flex items-center w-full text-xs gap-2 p-2 border rounded-lg animation-fade-in-out bg-neutral-800">
      <img
        src={`/assets/images/icon-checkmark-green-darkMode.svg`}
        alt="icon"
      />
      <p className="">{text}</p>
    </div>
  );
}