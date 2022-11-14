import React, { useContext, useState } from "react";
import {
  FaWindowClose,
  FaBars,
  FaHandSparkles,
  FaSearch,
  FaPlusCircle,
  FaHeart,
  FaRegUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import LogoMain from "./LogoMain";

const SideMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { logout, user } = useContext(UserContext);
  const close = () => setShowSidebar(!showSidebar);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex font-bold items-center cursor-pointer md:right-20 xl:right-40 right-5 top-3 z-50"
          onClick={close}
        >
          <FaWindowClose className="h-8 w-8" />
        </button>
      ) : (
        <button
          onClick={close}
          className="z-30 cursor-pointer top-3 md:right-20 xl:right-40 right-5 font-bold group"
        >
          <FaBars className="h-8 w-8" />
        </button>
      )}

      <div
        className={`top-0 right-[-1vw] md:w-[20vw] bg-white/90 p-10 rounded-bl-2xl fixed h-auto z-40 ease-in-out duration-300 shadow-2xl ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-10 md:mt-0">
          <h2 className="flex items-center py-3 text-pink-700">
            Hi, <FaHandSparkles className="mr-3 w-6 h-6" />
            <span className="font-bold uppercase group">
              {user.name}
              <span className="underlineHover" />
            </span>{" "}
          </h2>
          <div className="flex flex-col">
            <div className="hidden md:flex flex-col">
              <div className="flex items-center py-1">
                <FaSearch className="mr-3 w-5 h-5" />
                <Link to="/" onClick={close}>
                  Search
                </Link>
              </div>

              <div className="flex items-center py-1">
                <FaHeart className="mr-3 w-5 h-5" />
                <Link to="/favorites" onClick={close}>
                  Saved
                </Link>
              </div>
            </div>
            <div className="flex items-center py-1">
              <FaRegUserCircle className="mr-3 w-5 h-5" />
              <Link to="/profile" onClick={close}>
                Profile
              </Link>
            </div>
            <div className="flex items-center py-1">
              <FaPlusCircle className="mr-3 w-5 h-5" />
              <Link to="/add-post" onClick={close}>
                Add Post
              </Link>
            </div>
            <div className="flex items-center py-1">
              <FaSignOutAlt className="mr-3 w-5 h-5" />
              <Link
                onClick={() => {
                  logout(), close();
                }}
              >
                Logout
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <LogoMain />
              <p className="text-xs pt-4">
                Copyrigth {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
