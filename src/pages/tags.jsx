import React, { useState, useEffect } from "react";
import CloseTagListCard from "@/components/ui/cards/CloseTagListCard";
import MainTitle from "@/components/ui/text/main/MainTitle";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import PageHead from "@/components/common/PageHead";
import { getUserNotes } from "@/utils/getUserNotes";

function TagsListScreen() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function loadTags() {
      const notes = await getUserNotes();
      const allTags = notes.flatMap((note) => note.tags || []);
      const uniqueTags = [...new Set(allTags)];
      setTags(uniqueTags);
    }
    loadTags();
  }, []);
  return (
    <>
      <PageHead title="Tags" />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Header />
        <div
          style={{ backgroundColor: "var(--foreground" }}
          className="w-full h-screen pt-6 px-6 overflow-hidden flex flex-col rounded-t-2xl"
        >
          <MainTitle text="Tags" styles=" mb-4" />
          <div className="w-full h-fit overflow-y-auto flex flex-col gap-1">
            {tags.map((tag, index) => (
              <CloseTagListCard key={index} text={tag} />
            ))}
          </div>
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default TagsListScreen;
