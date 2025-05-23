import React from "react";
import useThemeMode from "../../../hooks/useThemeMode";

function ArchiveButton({ icon = "", styles = "" }) {
  const mode = useThemeMode();
  return (
    <button className={`w-[18px] h-[18px] cursor-pointer ${styles}`}>
      <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
    </button>
  );
}

export default ArchiveButton;
