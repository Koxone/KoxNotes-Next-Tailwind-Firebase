import React, { use } from "react";
import NavBarButton from "../buttons/NavBarButton";
import NewNoteButton from "../buttons/NewNoteButton";

import useThemeMode from "@/hooks/useThemeMode";

function NavBar() {
  const mode = useThemeMode();
  return (
    <div 
    style={{ backgroundColor: "var(--background)" }}
    className="w-full h-14 flex flex-row justify-between items-center absolute bottom-0 py-3 px-8">
      {/* <NewNoteButton icon="plus" mode="darkMode"/> */}
      <NavBarButton icon="home" mode={mode} />
      <NavBarButton icon="search" mode={mode} />
      <NavBarButton icon="archive" mode={mode} />
      <NavBarButton icon="tag" mode={mode} />
      <NavBarButton icon="settings" mode={mode} />
    </div>
  );
}

export default NavBar;
