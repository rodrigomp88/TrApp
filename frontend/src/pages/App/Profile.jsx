import React, { useContext } from "react";
import { FaHeart, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FooterOptions, HeaderClose, HomeLayout } from "../../components";
import { UserContext } from "../../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <HomeLayout>
      <HeaderClose />
      <div className="text-center mt-5 px-5">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <p className="flex items-center justify-center gap-2">
          <FaMapMarkerAlt />
          Mendoza Argentina
        </p>
        <div className="text-3xl font-bold mt-10">
          <hr className="my-5 border border-b border-black" />
          <button className="flex items-center gap-4">
            <FaUserAlt />
            Personal information
          </button>
          <hr className="my-5 border border-b border-black" />
          <Link to="/favorites">
            <button className="flex items-center gap-4">
              <FaHeart />
              saved
            </button>
          </Link>
          <hr className="my-5 border border-b border-black" />
        </div>
      </div>
      <FooterOptions />
    </HomeLayout>
  );
};

export default Profile;
