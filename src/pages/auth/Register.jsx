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
                  <div className="sm:w-1/2 flex  ">
                    <img src={logo} className="w-[400px] object-contain " />
                  </div>
                  <h1 className="hero-title sm:w-1/2 text-[50px]">
                    Think AI & Beyond: <br /> The Future Intelligence
                  </h1>

                  {/* <p className="hero-text">
                      Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                      quam vehicula lentum sed sit amet amet quam vehicula dui
                      amet quam vehicula.
                    </p> */}
                  {/* <div className="hero-btns">
                      <a href="about.html" className="vs-btn">
                        About Us
                      </a>
                      <Link to="/login" className="vs-btn style3">
                        Login
                      </Link>
                    </div> */}
                </div>
              </div>
              {/* <div className="col-lg-5">
                  <form
                    className="form-style1 ajax-contact"
                    action="mail.php"
                    method="post"
                    onSubmit={formik.handleSubmit}
                    style={{
                      background:
                        "linear-gradient(135deg, #024cbb 24%, #006 97%)",
                    }}
                  >
                    <h3 className="title  ">Register Now</h3>
                    <div className="flex flex-end w-full"></div>
                    <span className="subtitle">Make A Booking</span>
                    <div className="row gx-20">
                      <div className="col-md-12 form-group relative  ">
                        <input
                          className="form-control "
                          type="text"
                          name="fullName"
                          id="funame"
                          placeholder="Full Name"
                          onChange={formik.handleChange}
                        />
                        <span className="text-white absolute bottom-[-23px] left-[20px]">
                          {formik.errors.fullName}
                        </span>
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                          onChange={formik.handleChange}
                        />
                        <span className="text-white absolute bottom-[-23px] left-[20px]">
                          {formik.errors.email}
                        </span>
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          className="form-control"
                          type="tel"
                          name="phone"
                          id="tel"
                          placeholder="Phone Number"
                          onChange={formik.handleChange}
                        />
                        <span className="text-white absolute bottom-[-23px] left-[20px]">
                          {formik.errors.phone}
                        </span>
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          className="form-control"
                          type="tel"
                          name="companyName"
                          id="tel"
                          placeholder="Company Name"
                          onChange={formik.handleChange}
                        />
                        <span className="text-white absolute bottom-[-23px] left-[20px]">
                          {formik.errors.companyName}
                        </span>
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          className="form-control"
                          type="tel"
                          name="jobTitle"
                          id="tel"
                          placeholder="Job Title"
                          onChange={formik.handleChange}
                        />
                        <span className="text-white absolute bottom-[-23px] left-[20px]">
                          {formik.errors.jobTitle}
                        </span>
                      </div>

                      <div className="col-md-12 form-group">
                        <button className="vs-btn style2" type="submit">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messages mb-0 mt-3"></p>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
