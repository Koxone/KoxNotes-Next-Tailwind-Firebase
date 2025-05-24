import React, { useEffect, useState } from "react";
import GoBackButton from "@/components/ui/buttons/GoBackButton";
import MainTitle from "@/components/ui/text/main/MainTitle";
import SettingsOptionCard from "@/components/ui/cards/SettingsOptionCard";
import MainButton from "@/components/ui/buttons/mainButton";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import PageHead from "@/components/common/PageHead";

function SettingsOptionFontOpenScreen({}) {
  const [selectedFont, setSelectedFont] = useState("Inter");
  useEffect(() => {
    const saved = localStorage.getItem("fontOption");
    if (saved) {
      setSelectedFont(saved);
      document.documentElement.setAttribute("data-font", saved);
    }
  }, []);

  const toggleFont = (font) => {
    localStorage.setItem("fontOption", font);
    document.documentElement.setAttribute("data-font", font);
  };
  return (
    <>
      <PageHead title="Font Theme" />
      <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <Header />
        <div
          style={{ backgroundColor: "var(--foreground)" }}
          className="flex flex-col gap-4 w-full h-screen py-6 px-4 rounded-2xl"
        >
          <GoBackButton text="Settings" icon="arrow-left" mode="darkMode" />
          <MainTitle
            text="Font Theme"
            styles="text-[var(--color)] font-bold text-2xl mt-4 mb-4"
            subtitle="Choose your font theme:"
            subtitleStyles=""
          />
          <SettingsOptionCard
            icon="font-sans-serif"
            mode="darkMode"
            title="Inter (Original)"
            subtitle="Modern and precise, made to be clear"
            styleInside=""
            onClick={() => setSelectedFont("inter")}
            selected={selectedFont === "Inter"}
          />
          <SettingsOptionCard
            icon="font-serif"
            mode="darkMode"
            title="Serif"
            subtitle="Classic and elegant for a timeless feel."
            styleInside=""
            onClick={() => setSelectedFont("serif")}
            selected={selectedFont === "serif"}
          />
          <SettingsOptionCard
            icon="font-monospace"
            mode="darkMode"
            title="Monospace"
            subtitle="Code like, great for a technical vibe."
            styleInside=""
            onClick={() => setSelectedFont("mono")}
            selected={selectedFont === "mono"}
          />
          <MainButton
            onClick={() => toggleFont(selectedFont)}
            text="Apply Changes"
            styles="w-[132px] self-end mt-[8px]"
          />
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default SettingsOptionFontOpenScreen;
