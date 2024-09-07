import React, { useState } from "react";
import Nav from "../includes/Nav";
import Dash from "./Dash";
import Sidebar from "../includes/Sidebar";

const AppLayout = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex ">
      <Sidebar show={show} setShow={setShow} />

      <div className="flex md:flex-grow flex-col flex-1   gap-4 p-4 ">
        <Nav setShow={setShow} />
        <Dash />
      </div>
    </div>
  );
};

export default AppLayout;
