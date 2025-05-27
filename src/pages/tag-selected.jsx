"use client";
import { useSearchParams } from "next/navigation";
import MainTitle from "@/components/ui/text/main/MainTitle";
import NavBar from "@/components/ui/nav/NavBar";
import AllNotesContainer from "@/components/ui/containers/AllNotesContainer";
import Header from "@/components/ui/header/Header";
import PageHead from "@/components/common/PageHead";
import GoBackButton from "@/components/ui/buttons/GoBackButton";

function TagSelectedScreen() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  return (
    <>
      <PageHead
        title={`Tag: ${tag}`}
        description={`Notas etiquetadas con ${tag}`}
      />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Header />
        <div
          style={{ backgroundColor: "var(--foreground)" }}
          className="w-full h-full p-4 flex flex-col justify-center items-center overflow-hidden rounded-t-2xl"
        >
          <GoBackButton icon="arrow-left" styles="self-start mb-4" />
          <MainTitle
            subtitle={`All notes with the '${tag}' tag are shown here.`}
            subtitleStyles="text-[var(--colorSecondary)]"
            text={`Notes Tagged: ${tag}`}
            styles=" mb-3 text-[var(--colorSecondary)]"
          />
          <AllNotesContainer context="tagSelected" searchValue={tag} />
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default TagSelectedScreen;
