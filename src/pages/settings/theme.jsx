"use client";
import React, { useState, useEffect } from "react";
import GoBackButton from "@/components/ui/buttons/GoBackButton";
import MainTitle from "@/components/ui/text/main/MainTitle";
import SettingsOptionCard from "@/components/ui/cards/SettingsOptionCard";
import MainButton from "@/components/ui/buttons/mainButton";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import useThemeMode from "@/hooks/useThemeMode";
import PageHead from "@/components/common/PageHead";

function SettingsOptionThemeOpenScreen({}) {
  const [selectedTheme, setSelectedTheme] = useState("dark");
  useEffect(() => {
    const saved = localStorage.getItem("themeOption");
    if (saved) {
      setSelectedTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = (theme) => {
    localStorage.setItem("themeOption", theme);
    document.documentElement.setAttribute("data-theme", theme);
    console.log("Theme changed to:", theme);
  };

  const mode = useThemeMode();
  return (
    <>
      <PageHead
        title="Settings - KoxNotes"
        description="Settings page for KoxNotes"
      />
      <div
        style={{ backgroundColor: "var(--background)" }}
        className="w-full h-screen flex flex-col justify-center items-center overflow-hidden"
      >
        <Header />
        <div
          style={{ backgroundColor: "var(--foreground)" }}
          className="flex flex-col gap-4 w-full h-screen py-6 px-4 rounded-2xl"
        >
          <GoBackButton text="Settings" icon="arrow-left" mode={mode} />
          <MainTitle
            text="Color Theme"
            styles="text-[var(--color)] font-bold text-2xl mt-4 mb-4"
            subtitle="Choose your color theme:"
            subtitleStyles=""
          />
          <SettingsOptionCard
            icon="sun"
            mode={mode}
            title="Light Mode"
            onClick={() => setSelectedTheme("light")}
            selected={selectedTheme === "light"}
            subtitle="Pick a clean and classic light theme"
            styleInside=""
          />
          <SettingsOptionCard
            icon="moon"
            mode={mode}
            title="Dark Mode"
            onClick={() => setSelectedTheme("dark")}
            selected={selectedTheme === "dark"}
            subtitle="Select a sleek and modern dark theme"
            styleInside=""
          />
          <SettingsOptionCard
            icon="system-theme"
            mode={mode}
            title="System"
            onClick={() => {
              const isSystemDark = window.matchMedia(
                "(prefers-color-scheme: dark)",
              ).matches;
              setSelectedTheme(isSystemDark ? "dark" : "light");
            }}
            selected={selectedTheme !== "dark" && selectedTheme !== "light"}
            subtitle="Select the same theme as your system"
            styleInside=""
          />
          <MainButton
            onClick={() => toggleTheme(selectedTheme)}
            text="Apply Changes"
            styles="w-[132px] self-end mt-[8px]"
          />
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default SettingsOptionThemeOpenScreen;
