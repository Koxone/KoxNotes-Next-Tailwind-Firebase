import React from "react";

function NoteTextArea({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="w-full h-full resize-none break-words bg-transparent outline-none overflow-x-hidden px-4 pb-4 pt-4"
    />
  );
}

export default NoteTextArea;