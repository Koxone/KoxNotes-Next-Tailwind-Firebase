import React from "react";
import MainButton from "@/components/ui/buttons/mainButton";
import TitleAuth from "@/components/ui/text/auth/title";
import SubtitleAuth from "@/components/ui/text/auth/subtitle";
import PasswordInput from "@/components/ui/inputs/passwordInput";
import MainLogo from "@/components/ui/logo/MainLogo";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import GoBackButton from "@/components/ui/buttons/GoBackButton";
import PageHead from "@/components/common/PageHead";

import { useState } from "react";
import { auth } from "/firebase/firebaseConfig";
import { useToast } from "@/context/ToastContext";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";

function ResetPasswordScreen({ className = "" }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const { showToast } = useToast();

  const handleResetPassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      showToast("Please complete all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      showToast("Passwords do not match");
      return;
    }

    const user = auth.currentUser;
    if (!user || !user.email) {
      showToast("No authenticated user");
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword,
      );
      await reauthenticateWithCredential(user, credential);

      console.log("User before update:", auth.currentUser);
      await updatePassword(user, newPassword);
      console.log("Password updated successfully");
      showToast("Password updated successfully");
    } catch (error) {
      console.error("Error:", error);
      if (error.code === "auth/wrong-password") {
        showToast("Incorrect current password");
      } else if (error.code === "auth/too-many-requests") {
        showToast("Too many attempts, try again later");
      } else {
        showToast("Error updating password");
      }
    }
  };

  return (
    <>
      <PageHead title="Reset Password" />
      <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <Header />
        <div
          style={{ backgroundColor: "var(--foreground)" }}
          className={`${className} w-full h-screen rounded-2xl pb-12 pt-5 px-4 flex flex-col items-center`}
        >
          <GoBackButton icon="arrow-left" mode="darkMode" styles="self-start" />
          <MainLogo className="" />
          <div className="mb-9 mt-5">
            <TitleAuth text="Reset Your Password" />
            <SubtitleAuth text="Choose a new password to secure your account" />
          </div>

          <div className="w-full flex flex-col">
            <div className="w-full ">
              <PasswordInput
                text="Current Password"
                className="w-full"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="w-full mb-4">
              <PasswordInput
                text="New Password"
                className="w-full"
                atLeast="At Least 8 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="w-full">
              <PasswordInput
                text="Confirm New Password"
                className="w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <MainButton
            text="Reset Password"
            className=""
            styles="w-full"
            onClick={handleResetPassword}
          />
        </div>
      </div>
    </>
  );
}

export default ResetPasswordScreen;
