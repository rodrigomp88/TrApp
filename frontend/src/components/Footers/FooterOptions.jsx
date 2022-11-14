import React from "react";
import { FaBahai, FaShare } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FacebookShareButton } from "react-share";

const FooterOptions = () => {
  const location = useLocation();
  //thats works when the web site is on deployed
  const shareUrl = `${import.meta.env.VITE_URL}${location.pathname}`;

  return (
    <nav className="fixed w-full bottom-0 py-4 px-12">
      {location.pathname === "/profile" ? (
        <div className="flex justify-start">
          <button className="flex flex-col justify-center items-center text-xs">
            <FaBahai className="h-6 w-6" />
            settings
          </button>
        </div>
      ) : (
        <div className="flex justify-end md:flex-col md:pr-16">
          <div className="flex flex-col justify-center items-center text-xs">
            <FacebookShareButton url={shareUrl} quote="TrApp" hashtag="#TrApp">
              <FaShare className="h-6 w-6" />
              Share
            </FacebookShareButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default FooterOptions;
