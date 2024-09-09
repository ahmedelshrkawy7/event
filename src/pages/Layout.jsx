import React, { useRef, useState } from "react";
import HeaderTop from "../coponents/HeaderTop";
import { Outlet } from "react-router-dom";
import About from "../coponents/About";
import { Schedule } from "../coponents/Schedule";
import Register2 from "./auth/Register2";

const Layout = () => {
  const myref = useRef(null);

  return (
    <>
      <HeaderTop ref={myref} />

      <Outlet />

      <About />
      <Schedule />

      <Register2 ref={myref} />
    </>
  );
};

export default Layout;
