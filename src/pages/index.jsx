import MainTitle from "@/components/ui/text/main/MainTitle";
import NavBar from "@/components/ui/nav/NavBar";
import AllNotesContainer from "@/components/ui/containers/AllNotesContainer";
import Header from "@/components/ui/header/Header";
import NewNoteButton from "@/components/ui/buttons/NewNoteButton";
import PageHead from "@/components/common/PageHead";

function MainScreen() {
  return (
    <>
      <PageHead
        title="KoxNotes"
        description="A simple notes app with Firebase and Next.js"
      />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Header />
        <div
          style={{ backgroundColor: "var(--foreground)" }}
          className="w-full h-full p-4 flex flex-col justify-center items-center overflow-hidden rounded-t-2xl"
        >
          <MainTitle text="All Notes" styles=" mb-4" />
          <AllNotesContainer />
          <NewNoteButton icon="plus" mode="darkMode" />
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default MainScreen;
