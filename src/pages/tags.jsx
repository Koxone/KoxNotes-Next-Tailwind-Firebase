import React from "react";
import CloseTagListCard from "@/components/ui/cards/CloseTagListCard";
import MainTitle from "@/components/ui/text/main/MainTitle";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import PageHead from "@/components/common/PageHead";

function TagsListScreen() {
  return (
    <>
      <PageHead title="Tags" />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Header />
        <div
          style={{ backgroundColor: "var(--foreground" }}
          className="w-full h-screen pt-6 px-6 overflow-hidden flex flex-col rounded-2xl"
        >
          <MainTitle text="Tags" styles=" mb-4" />
          <div className="w-full h-fit overflow-y-auto flex flex-col gap-1">
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
            <CloseTagListCard mode="darkMode" text="Cooking" />
          </div>
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default TagsListScreen;
