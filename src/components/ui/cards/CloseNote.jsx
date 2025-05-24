"use client";
import React from "react";
import Tag from "./Tag";
import { useRouter } from "next/navigation";

function CloseNote({ title = "", date = "", tags = [], id }) {
  const router = useRouter();

  const safeTags = Array.isArray(tags)
    ? tags
    : typeof tags === "string"
      ? tags.split(",").map((t) => t.trim())
      : [];

  const goTo = () => {
    localStorage.setItem("selectedNoteId", id); // Guardamos el id
    router.push("/open-note"); // Navegamos a la vista estática
  };

  return (
    <div
      onClick={goTo}
      className="main w-full flex flex-col gap-3.5 p-2 border-b border-neutral-800 cursor-pointer"
    >
      <p className="text-[16px]  font-semibold leading-[120%]  text-left tracking-[-0.3px]">
        {title}
      </p>
      <div className="flex flex-row gap-2">
        {safeTags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <p
        style={{ color: "var(--text)" }}
        className="text-xs  font-normal leading-[120%] text-left tracking-[-0.3px]"
      >
        {date}
      </p>
    </div>
  );
}

export default CloseNote;
