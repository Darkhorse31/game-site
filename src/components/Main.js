import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div
      className="main"
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <div className="childRender">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
