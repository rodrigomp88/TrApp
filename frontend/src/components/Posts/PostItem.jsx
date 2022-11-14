import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PostContext } from "../../context/PostContext";
const PostItem = ({ post }) => {
  const { addFavorite, favoriteList, removeFavorite } = useContext(PostContext);

  let storedList = favoriteList.find((o) => o.id === post.id);

  const favoriteState = storedList ? true : false;

  return (
    <div className="mt-4 px-5">
      <div className="relative">
        <img className="w-full" src={post.image} alt={post.title} />
        <button
          onClick={
            favoriteState
              ? () => removeFavorite(post.id)
              : () => addFavorite(post)
          }
          className="absolute top-0 p-2 m-2"
        >
          <FaHeart
            className={
              favoriteState ? "w-8 h-8 text-pink-700" : "w-8 h-8 text-white"
            }
          />
        </button>
      </div>
      <Link to={`/post/${post.id - 1}`}>
        <p className="mt-3">{post.description}</p>
      </Link>
    </div>
  );
};

export default PostItem;
