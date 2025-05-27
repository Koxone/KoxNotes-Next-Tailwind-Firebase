"use client";

import MainButton from "@/components/ui/buttons/mainButton";
import MailInput from "@/components/ui/inputs/mailInput";
import TitleAuth from "@/components/ui/text/auth/title";
import SubtitleAuth from "@/components/ui/text/auth/subtitle";
import MainLogo from "@/components/ui/logo/MainLogo";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import GoBackButton from "@/components/ui/buttons/GoBackButton";
import PageHead from "@/components/common/PageHead";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "/firebase/firebaseConfig";
import { useToast } from "@/context/ToastContext";

import { useRouter } from "next/navigation";

function ForgotPasswordScreen({ className = "" }) {
  const [email, setEmail] = useState("");
  const { showToast } = useToast();
  const router = useRouter();

  const handleResetPassword = async () => {
    if (!email) {
      showToast("Please enter your email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      showToast("Reset link sent to your email");
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (error) {
      console.error("Error sending reset email:", error);
      showToast("Error sending reset link");
    }
  };

  return (
    <>
      <PageHead
        title="Forgot Password"
        description="KoxNotes - Forgot Password"
      />
      <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <Header />
        <div
          className={`${className} bg-[var(--foreground)] w-full h-screen rounded-2xl py-12 px-4 flex flex-col items-center gap-4 overflow-hidden`}
        >
          <GoBackButton
            icon="arrow-left"
            mode="darkMode"
            styles="self-start"
            text="Cancel"
          />
          <MainLogo className="" />
          <TitleAuth text="Forgotten your password?" />
          <SubtitleAuth text="Enter your email below, and we’ll send you a link to reset it." />
          <MailInput
            className=""
            text="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MainButton
            text="Send Reset Link"
            styles="w-full"
            onClick={handleResetPassword}
          />
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordScreen;
