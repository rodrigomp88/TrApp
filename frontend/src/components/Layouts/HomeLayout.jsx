import React from "react";

const HomeLayout = ({ children }) => (
  <main className="flex flex-col items-center justify-between">
    <div className="md:w-6/12">{children}</div>
  </main>
);

export default HomeLayout;
