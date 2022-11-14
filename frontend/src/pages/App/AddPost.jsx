import React from "react";
import {
  FooterNav,
  FormAddPost,
  HeaderApp,
  HomeLayout,
} from "../../components";

const AddPost = () => (
  <HomeLayout>
    <HeaderApp />
    <div className="px-5">
      <FormAddPost />
    </div>
    <FooterNav />
  </HomeLayout>
);

export default AddPost;
