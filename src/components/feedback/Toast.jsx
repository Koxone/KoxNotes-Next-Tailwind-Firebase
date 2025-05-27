import React from "react";

export default function Toast({ text = "" }) {
  return (
    <div className="flex items-center w-fit max-w-[90vw] text-xs gap-2 p-2 border rounded-lg bg-neutral-800 shadow-lg">

      <img
        src={`/assets/images/icon-checkmark-green-darkMode.svg`}
        alt="icon"
      />
      <p className="">{text}</p>
    </div>
  );
}