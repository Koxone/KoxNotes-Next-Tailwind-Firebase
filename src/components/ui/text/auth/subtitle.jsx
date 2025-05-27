import React from "react";

function SubtitleAuth({ text, styles = "" }) {
  return (
    <p
      className={`text-sm font-normal leadin-[1.2] ${styles} text-center tracking-[-0.2px]`}
    >
      {text}
    </p>
  );
}

export default SubtitleAuth;
