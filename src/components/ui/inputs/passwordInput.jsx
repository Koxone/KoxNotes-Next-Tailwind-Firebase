"use client";
import { useState } from "react";
import Link from "next/link";

function PasswordInput({
  text = "",
  className = "",
  forgot = "",
  atLeast = "",
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm font-medium leading-[1.2] tracking-[-0.2px] text-left">
          {text}
        </p>
        <Link
          href="/auth/forgot-password"
          className={`text-neutral-400 text-[12px] text-right ${forgot ? "visible" : "invisible"}`}
        >
          {forgot}
        </Link>
      </div>

      <div className="w-full relative">
        <img
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg cursor-pointer"
          src={`/assets/images/icon-${showPassword ? "show" : "hide"}-password-darkMode.svg`}
          alt={showPassword ? "hide password" : "show password"}
          onClick={toggleVisibility}
        />
        <input
          className={`${className} border border-neutral-600 py-3 px-4 rounded-[8px] placeholder:text-neutral-500 bg-none bg-transparent outline-none`}
          type={showPassword ? "text" : "password"}
          name="password"
          required
          minLength={8}
          value={value}
          onChange={onChange}
        />
      </div>

      <div
        className={`flex flex-row items-center gap-2 ${atLeast ? "visible" : "invisible"}`}
      >
        <img
          className="w-4 h-4"
          src="/assets/images/icon-info-darkMode.svg"
          alt="info icon"
        />
        <p className="text-neutral-400 text-[12px] font-medium leading-[1.4] tracking-[-0.2px] text-left">
          {atLeast}
        </p>
      </div>
    </div>
  );
}

export default PasswordInput;
