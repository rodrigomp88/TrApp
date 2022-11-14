import React, { useEffect, useState } from "react";
import { FooterNav, HeaderApp, HomeLayout, PostItem } from "../../components";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteList"));
    if (favorites) {
      setFavorites(favorites);
    }
  }, []);

  return (
    <HomeLayout>
      <HeaderApp />
      <div className="mt-5 px-5">
        <h2 className="text-3xl font-semibold">Saved</h2>
        <p>
          You have saved{" "}
          <span className="text-pink-700 font-bold">{favorites.length}</span>{" "}
          posts
        </p>
      </div>
      <div className="grid grid-cols-2">
        {favorites.map((f) => (
          <PostItem key={f.id} post={f} />
        ))}
      </div>
      <FooterNav />
    </HomeLayout>
  );
};

export default Favorites;
