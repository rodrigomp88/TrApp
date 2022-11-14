import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostContext } from "../../context/PostContext";

const Form = () => {
  const { insertPost } = useContext(PostContext);
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();

  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  const submitUser = (e) => {
    e.preventDefault();
    insertPost(newUser);

    navigate("/");
    e.target.reset();
  };

  return (
    <form className="space-y-3 mt-5" onSubmit={submitUser}>
      <h2 className="text-3xl font-semibold">Insert new Post</h2>
      <label htmlFor="_title" className="label">
        Title
      </label>
      <input
        className="input"
        type="text"
        id="_title"
        onChange={(e) => addNewUser(e, "title")}
        placeholder="Enter title"
        autoComplete="off"
        required
      />
      <label htmlFor="_description" className="label">
        Description
      </label>
      <textarea
        className="input"
        type="text"
        id="_description"
        onChange={(e) => addNewUser(e, "description")}
        placeholder="Enter a description"
        autoComplete="off"
        required
      />
      <label htmlFor="_image" className="pl-3 text-lg font-semibold">
        Url Image
      </label>
      <input
        className="input"
        type="text"
        id="_image"
        onChange={(e) => addNewUser(e, "image")}
        placeholder="https://page/image.jpg"
        autoComplete="off"
        required
      />
      <div className="mt-10">
        <button type="submit" value="button" className="button">
          Add
        </button>
        <Link to="/">
          <button className="button mt-5 bg-black">cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default Form;
