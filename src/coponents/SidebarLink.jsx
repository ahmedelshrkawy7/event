"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const SidebarLink = ({ href, icon, id }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`animate_from_left ${id === 0 ? "" : `animation_delay-${id}`}`}
    >
      <div
        className={`group flex items-center justify-between gap-2 transition  hover:bg-red-100 w-full p-5 px-10 rounded-e-3xl h-12 border-l-4 border-l-transparent hover:border-l-red-500 ${
          true ? "bg-red-400 border-l-2 " : ""
        }`}
        onClick={() => setShow(!show)}
      >
        <img
          src={icon}
          alt=""
          className="group-hover:text-red-600 text-black w-6 "
        />
        <Link
          className={`group-hover:text-red-600 font-medium text-md  flex-1 ${
            true ? "text-red-600" : ""
          }`}
        >
          {href}
        </Link>

        <IoIosArrowForward
          className={` text-xl group-hover:text-red-500 ${
            show ? "rotate-90" : ""
          }`}
        />
      </div>

      {show && (
        <div className="ml-16 flex items-center">
          <ul className="w-2/3 mt-3 cursor-pointer">
            <li className="flex items-center gap-4 text-md hover:bg-gray-200 p-2 rounded-lg ">
              <CiUser className="text-[20px]" />
              profile
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarLink;
