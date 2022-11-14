import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const FormSignUp = () => {
  const { registerUser, wait } = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
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
      setSuccessMsg(false);
      setErrMsg("Please Fill in all Required Fields!");
      return;
    }

    const data = await registerUser(formData);
    if (data.success) {
      e.target.reset();
      setSuccessMsg("You have successfully registered.");
      setErrMsg(false);
    } else if (!data.success && data.message) {
      setSuccessMsg(false);
      setErrMsg(data.message);
    }
  };

  return (
    <form onSubmit={submitForm} className="space-y-8 mt-5">
      <div>
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          className="input"
          type="text"
          name="name"
          onChange={onChangeInput}
          placeholder="Your name"
          id="name"
          value={formData.name}
        />
      </div>
      <div>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          className="input"
          type="email"
          name="email"
          onChange={onChangeInput}
          placeholder="Your email"
          id="email"
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
          onChange={onChangeInput}
          placeholder="New password"
          id="password"
          value={formData.password}
        />
      </div>
      {successMsg && <div className="success-msg">{successMsg}</div>}
      {errMsg && <div className="err-msg">{errMsg}</div>}
      <div className="mt-5">
        <button type="submit" className="button" disabled={wait}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default FormSignUp;
