import React from "react";

function NoteTextArea({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="w-full h-screen resize-none break-words bg-transparent  outline-none overflow-x-hidden px-2"
    />
  );
}

export default NoteTextArea;
