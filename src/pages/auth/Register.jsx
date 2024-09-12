import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../../includes/Nav";
import logo from "../../assets/logo3.png";
import Panner from "../../coponents/Panner";
import Register2 from "./Register2";

const Register = () => {
  return (
    <div
      className="vs-carousel style1"
      data-autoplay="false"
      data-slide-show="1"
      data-fade="true"
      data-arrows="false"
    >
      <div>
        <div className="hero-inner">
          <div
            className="hero-bg relative bg-contain bg-no-repeat sm:bg-cover  "
            // data-bg-src="../../assets/pexels-tara-winstead-8386440.jpg"
          >
            <div className="overlay"></div>
          </div>
          {/* <Link to="/dashboard">dash</Link> */}
          <div className="container">
            <div className="row justify-content-between">
              <div className="">
                <div className="hero-content flex flex-col justify-between items-start gap-10">
                  {/* <span className="hero-subtitle">
                      Get Best event Management
                    </span> */}
                  <div className="sm:w-1/2 flex justify-center w-full ">
                    <img
                      src={logo}
                      className=" w-[300px]  sm:w-[400px] object-contain "
                    />
                  </div>
                  <h1 className="hero-title sm:w-1/2 text-[50px]">
                    Think AI & Beyond: <br /> The Future Intelligence
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
