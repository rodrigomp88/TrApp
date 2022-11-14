import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  SignIn,
  SignUp,
  AddPost,
  Favorites,
  Home,
  Profile,
  Post,
} from "./pages";

import { UserContext } from "./context/UserContext";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        {user && (
          <>
            <Route path="/" element={<Home />} />,
            <Route path="/add-post" element={<AddPost />} />,
            <Route path="/favorites" element={<Favorites />} />,
            <Route path="/profile" element={<Profile />} />,
            <Route path="/post/:id" element={<Post />} />,
          </>
        )}
        {!user && (
          <>
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
