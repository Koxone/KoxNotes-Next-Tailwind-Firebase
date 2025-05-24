"use client";
import React from "react";
import { useRouter } from "next/navigation";

function CancelButton({ styles = "" }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={`w-11 h-[18px] text-[var(--color)] hover:text-red-600 text-[14px] font-normal ${styles} flex justify-center items-center cursor-pointer`}
    >
      Cancel
    </button>
  );
}

export default CancelButton;
