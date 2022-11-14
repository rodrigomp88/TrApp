import { useContext, useState } from "react";
import {
  PostList,
  HomeLayout,
  HeaderApp,
  FooterNav,
  InputSearch,
} from "../../components";
import { PostContext } from "../../context/PostContext";

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { posts } = useContext(PostContext);

  return (
    <HomeLayout>
      <HeaderApp />
      <div className="mt-5">
        <InputSearch
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          placeholder="Search a post..."
          data={posts.posts}
        />
        {filteredData.length != 0 ? null : <PostList />}
      </div>
      <FooterNav />
    </HomeLayout>
  );
};

export default Home;
