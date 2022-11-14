import React from "react";
import { LogoMain } from "../";

const AuthLayout = ({ children }) => (
  <section className="flex flex-col items-center justify-center">
    <LogoMain />
    <div className="mt-14 w-screen px-8 sm:w-6/12">{children}</div>
  </section>
);

export default AuthLayout;
