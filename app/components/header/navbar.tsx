import React from "react";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

const NavBar = () => {
  return (
    <header className="bg-[#232225]  rounded-lg font-normal">
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
};

export default NavBar;
