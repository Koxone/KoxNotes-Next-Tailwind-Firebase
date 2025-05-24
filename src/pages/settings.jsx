import React from "react";
import MainTitle from "@/components/ui/text/main/MainTitle";
import SettingsCard from "@/components/ui/cards/SettingsCard";
import NavBar from "@/components/ui/nav/NavBar";
import Header from "@/components/ui/header/Header";
import PageHead from "@/components/common/PageHead";

function SettingsScreen() {
  return (
    <>
      <PageHead title="Settings" />
      <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <Header />
        <div
          style={{ backgroundColor: "var(--foreground" }}
          className="w-full h-screen py-6 px-4 rounded-2xl"
        >
          <MainTitle text="Settings" styles="" />
          <div className="flex flex-col items-start justify-start gap-4 mt-4 w-full">
            <SettingsCard
              text="Color Theme"
              styles=""
              icon="sun"
              mode="darkMode"
              param="theme"
            />
            <SettingsCard
              text="Font Theme"
              styles=""
              icon="font"
              mode="darkMode"
              param="font"
            />
            <SettingsCard
              text="Change Password"
              styles=""
              icon="lock"
              mode="darkMode"
              param="change"
            />
            <hr className="w-full border-t border-neutral-700 my-4" />
            <SettingsCard
              text="Logout"
              styles=""
              icon="logout"
              mode="darkMode"
              param="logout"
            />
          </div>
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default SettingsScreen;
