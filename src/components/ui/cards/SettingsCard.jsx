"use client";
import { useRouter } from "next/navigation";
import React from "react";
import useThemeMode from "@/hooks/useThemeMode";
import { getAuth, signOut } from "firebase/auth";

function SettingsCard({ text = "", styles = "", icon = "", param = "" }) {
  const mode = useThemeMode();
  const router = useRouter();

  const handleClick = () => {
    if (param === "theme") {
      router.push("/settings/theme");
    } else if (param === "font") {
      router.push("/settings/font");
    } else if (param === "change") {
      router.push("/settings/change-password");
    } else if (param === "logout") {
      const auth = getAuth();
      signOut(auth).catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
    } else {
      router.push("/settings");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles} font-normal text-sm  flex items-center gap-2 w-full cursor-pointer hover:bg-[var(--hover)] hover:rounded-sm p-2`}
    >
      <img
        className="w-5 h-5"
        src={`/assets/images/icon-${icon}-${mode}.svg`}
        alt="icon"
      />
      {text}
    </button>
  );
}

export default SettingsCard;
