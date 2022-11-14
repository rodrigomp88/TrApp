import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderClose = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 flex items-center justify-between py-3 bg-opacity-95 bg-blue-100 px-5 z-10">
      <Link to="/profile">
        <RoundedImage />
      </Link>
      <Link to="/">
        <p className="text-2xl font-bold">X</p>
      </Link>
    </nav>
  );
};

const RoundedImage = () => (
  <div className={location.pathname === "/profile" ? "pl-24 md:pl-0" : ""}>
    <img
      src="../assets/profile.png"
      alt="Profile"
      className={location.pathname === "/profile" ? "md:h-10 h-36" : "h-10"}
    />
  </div>
);

export default HeaderClose;
