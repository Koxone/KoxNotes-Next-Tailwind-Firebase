import React from "react";
import useThemeMode from "@/hooks/useThemeMode";

function CloseTagListCard({ styles = "", text = "" }) {
  const mode = useThemeMode();
  return (
    <div className="w-full border-b border-neutral-800 flex gap-2 py-2.5 cursor-pointer hover:border-none hover:bg-[var(--hover)] hover:rounded-[8px] hover:scale-100 hover:pl-6 transition duration-300 ease-in-out">
      <img src={`/assets/images/icon-tag-${mode}.svg`} alt="icon" />
      <p className="">{text}</p>
    </div>
  );
}

export default CloseTagListCard;
