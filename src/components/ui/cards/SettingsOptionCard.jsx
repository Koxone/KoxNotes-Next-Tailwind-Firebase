import React, { useEffect, useState } from "react";
import useThemeMode from "../../../hooks/useThemeMode";

function SettingsOptionCard({
  styleOut = "",
  styleInside = "",
  icon = "",
  title = "",
  subtitle = "",
  selected = false,
  onClick = () => {},
}) {
  const mode = useThemeMode();
  return (
    <label
      onClick={onClick}
      className={`${styleOut} w-full border-2 border-neutral-700 rounded-lg flex flex-row justify-evenly items-center p-4 gap-4 hover:bg-[var(--hover)] cursor-pointer`}
    >
      <div
        className={`${styleInside} bg-[var(--foreground)] rounded-xl w-10 h-10 flex items-center justify-center border-2 border-neutral-800`}
      >
        <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="  text-sm">{title}</p>
        <p className="text-[var(--colorSecondary)]  text-xs font-light ">
          {subtitle}
        </p>
      </div>
      <input className="cursor-pointer" type="radio" name="first" />
    </label>
  );
}

export default SettingsOptionCard;
