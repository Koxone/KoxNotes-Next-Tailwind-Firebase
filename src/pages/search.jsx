import React, { useState, useEffect } from "react";
import MainTitle from "@/components/ui/text/main/MainTitle";
import AllNotesContainer from "@/components/ui/containers/AllNotesContainer";
import SearchInput from "@/components/ui/inputs/SearchInput";
import NavBar from "@/components/ui/nav/NavBar";
import Header from "@/components/ui/header/Header";
import PageHead from "@/components/common/PageHead";

function SearchScreen() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <PageHead title="Search" />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Header />
        <div
          style={{ backgroundColor: "var(--foreground)" }}
          className="w-full h-full p-4 flex flex-col justify-center items-center overflow-hidden rounded-2xl gap-4"
        >
          <MainTitle
            text="Search"
            styles=" mb-3"
            subtitleStyles="text-neutral-500"
            subtitle="All notes matching Dev are displayed below."
          />
          <SearchInput value={searchValue} setValue={setSearchValue} />
          <AllNotesContainer context="search" searchValue={searchValue} />
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default SearchScreen;
