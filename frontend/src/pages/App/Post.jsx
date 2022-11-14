import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  FooterOptions,
  HeaderClose,
  HomeLayout,
  PostItem,
} from "../../components";
import { PostContext } from "../../context/PostContext";

const Post = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContext);

  const post = posts.posts[id];

  return (
    <HomeLayout>
      <HeaderClose />
      <div className="px-5 mt-5">
        <h1 className="text-3xl my-4 font-semibold">{post.title} </h1>
        <img className="w-full" src={post.image} alt={post.title} />
        <p className="my-4">{post.description}</p>
        <FooterOptions />
      </div>
    </HomeLayout>
  );
};

export default Post;
