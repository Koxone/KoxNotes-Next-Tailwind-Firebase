"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useThemeMode from "../../../hooks/useThemeMode";

function GoBackButton({
  icon = "arrow",
  styles = "",
  text = "Go Back",
}) {
  const mode = useThemeMode();
  const router = useRouter();

  return (
    <button
      style={{ color: "var(--color)" }}
      onClick={() => router.back()}
      className={`${styles} flex items-center whitespace-nowrap gap-2 text-sm hover:underline cursor-pointer`}
    >
      <img
        src={`/assets/images/icon-${icon}-${mode}.svg`}
        alt="icon"
        className="w-4 h-4"
      />
      {text}
    </button>
  );
}

export default GoBackButton;
