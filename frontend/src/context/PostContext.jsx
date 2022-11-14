import React, { createContext, useReducer, useEffect, useState } from "react";

const initialState = {
  favoriteList: localStorage.getItem("favoriteList")
    ? JSON.parse(localStorage.getItem("favoriteList"))
    : [],
};

export const PostContext = createContext(initialState);

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE_TO_LIST":
      return {
        ...state,
        favoriteList: [action.payload, ...state.favoriteList],
      };
    case "REMOVE_FAVORITE_FROM_LIST":
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const PostProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  let [posts, setPosts] = useState([]);
  let [postLength, setPostLength] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}getPosts.php`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setPosts(data);
          setPostLength(true);
        } else {
          setPostLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const insertPost = (newPost) => {
    fetch(`${import.meta.env.VITE_BASE_URL}addPost.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          setPosts([
            {
              id: data.id,
              ...newPost,
            },
            ...posts,
          ]);
          setPostLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
  }, [state]);

  const addFavorite = (movie) => {
    dispatch({ type: "ADD_FAVORITE_TO_LIST", payload: movie });
  };

  const removeFavorite = (id) => {
    dispatch({ type: "REMOVE_FAVORITE_FROM_LIST", payload: id });
  };

  return (
    <PostContext.Provider
      value={{
        favoriteList: state.favoriteList,
        addFavorite,
        removeFavorite,
        posts: posts,
        postLength,
        insertPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostProvider;
