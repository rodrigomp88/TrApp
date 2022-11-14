import { useContext, useEffect } from "react";
import { PostContext } from "../../context/PostContext";
import { PostItem } from "./";

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <section className="px-5 mb-32">
      {posts.posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </section>
  );
};

export default PostList;
