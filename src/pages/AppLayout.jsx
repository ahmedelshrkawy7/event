import React, { useState } from "react";
import Nav from "../includes/Nav";
import Dash from "./Dash";
import Sidebar from "../includes/Sidebar";
import { Navigate } from "react-router-dom";

const AppLayout = () => {
  const [show, setShow] = useState(false);

  const token = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : "";

  if (token) {
    return (
      <div className="flex ">
        <Sidebar show={show} setShow={setShow} />

        <div className="flex md:flex-grow flex-col flex-1   gap-4 p-4 ">
          <Nav setShow={setShow} />
          <Dash />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default AppLayout;
