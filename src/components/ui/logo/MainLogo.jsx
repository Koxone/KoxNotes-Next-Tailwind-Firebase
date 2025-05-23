"use client";
import React from "react";

import { useRouter } from "next/navigation";

function MainLogo() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-row justify-center items-center gap-2.5 cursor-pointer"
    >
      <img src="/assets/images/Feather.png" alt="blue feather icon" />
      <p className="text-white font-[Pacifico] text-[23px]">KoxNotes</p>
    </div>
  );
}

export default MainLogo;
