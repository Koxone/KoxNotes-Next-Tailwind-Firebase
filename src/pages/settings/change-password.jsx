import React from "react";
import MainButton from "@/components/ui/buttons/mainButton";
import TitleAuth from "@/components/ui/text/auth/title";
import SubtitleAuth from "@/components/ui/text/auth/subtitle";
import PasswordInput from "@/components/ui/inputs/passwordInput";
import MainLogo from "@/components/ui/logo/MainLogo";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import GoBackButton from "@/components/ui/buttons/GoBackButton";

function ResetPasswordScreen({ className = "" }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <Header />
      <div
        className={`${className} bg-neutral-950 w-full h-screen rounded-2xl py-12 px-4 flex flex-col items-center gap-4`}
      >
        <GoBackButton icon="arrow-left" mode="darkMode" styles="self-start" />
        <MainLogo className="" />
        <TitleAuth text="Reset Your Password" />
        <SubtitleAuth text="Choose a new password to secure your account" />
        <PasswordInput text="New Password" className="w-full" atLeast="At Least 8 characters" />
        <PasswordInput text="Confirm New Password" className="w-full" />
        <MainButton text="Reset Password" className="" styles="w-full" />
      </div>
      <NavBar />
    </div>
  );
}

export default ResetPasswordScreen;
