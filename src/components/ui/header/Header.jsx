import React from "react";
import MainLogo from "../logo/MainLogo";

function Header({ styles = '' }) {
  return (
    <header 
      style={{ backgroundColor: "var(--background)" }}
    className={`flex flex-row w-full py-3 px-4 sticky top-0 ${styles}`}>
      <MainLogo />
    </header>
  );
}

export default Header;
