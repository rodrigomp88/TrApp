import React from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterNav = () => (
  <nav className="fixed w-full bottom-0 left-0 flex justify-between md:hidden py-4 px-12 bg-white">
    <Link to="/" className="flex flex-col justify-center items-center text-xs">
      <FaSearch className="h-6 w-6" />
      Search
    </Link>
    <Link
      to="/favorites"
      className="flex flex-col justify-center items-center text-xs"
    >
      <FaHeart className="h-6 w-6" />
      Saved
    </Link>
  </nav>
);

export default FooterNav;
