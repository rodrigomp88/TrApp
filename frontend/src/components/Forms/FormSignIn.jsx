import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

const FormSignIn = () => {
  const { loginUser, wait, loggedInCheck } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!Object.values(formData).every((val) => val.trim() !== "")) {
      setErrMsg("Please Fill in all Required Fields!");
      return;
    }

    const data = await loginUser(formData);
    if (data.success) {
      e.target.reset();
      setRedirect("Redirecting...");
      await loggedInCheck();
      return;
    }
    setErrMsg(data.message);
  };

  return (
    <form onSubmit={submitForm} className="space-y-8 mt-5">
      <div>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          className="input"
          type="email"
          name="email"
          onChange={onChangeInput}
          id="email"
          placeholder="Example@mail.com"
          value={formData.email}
        />
      </div>
      <div>
        <label htmlFor="password" className="label">
          Password:
        </label>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangeInput}
          id="password"
          value={formData.password}
        />
      </div>
      {errMsg && <div className="err-msg">{errMsg}</div>}
      {redirect ? (
        redirect
      ) : (
        <div className="mt-5">
          <button type="submit" className="button" disabled={wait}>
            Sign In
          </button>
        </div>
      )}
    </form>
  );
};

export default FormSignIn;
