import React from "react";

function Tag({ text = "" }) {
  return (
    <div 
      style={{ backgroundColor: "var(--secondaryBackground)" }}
    className="rounded-sm flex flex-row justify-center items-center w-auto h-[18px] px-1">
      <p className="text-xs  font-normal ">{text}</p>
    </div>
  );
}

export default Tag;
