import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

const HeaderApp = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between py-3 bg-opacity-95 bg-blue-100 px-5 z-10">
      <Link to="/profile">
        <RoundedImage />
      </Link>
      <SideMenu />
    </nav>
  );
};

const RoundedImage = () => (
  <div>
    <img src="../assets/profile.png" alt="Profile" className="h-10" />
  </div>
);

export default HeaderApp;
