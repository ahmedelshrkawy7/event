import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("====================================");
      console.log(values);
      console.log("====================================");
      axios.post("http://localhost:8800/api/auth/login", values).then((res) => {
        navigate("/dashboard");
      });
    },
  });

  return (
    <section>
      <div
        className="vs-carousel style1"
        data-autoplay="false"
        data-slide-show="1"
        data-fade="true"
        data-arrows="false"
      >
        <div>
          <div className="hero-inner">
            <div className="overlay"></div>
            <div
              className="hero-bg"
              data-bg-src="assets/img/bg/h-1-1.jpg"
            ></div>
            <Link to="/dashboard">dash</Link>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <span className="hero-subtitle">
                      Get Best event Management
                    </span>
                    <h1 className="hero-title">
                      Events, Meetups & Conferences
                    </h1>
                    <p className="hero-text">
                      Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                      quam vehicula lentum sed sit amet amet quam vehicula dui
                      amet quam vehicula.
                    </p>
                    <div className="hero-btns">
                      <a href="about.html" className="vs-btn">
                        About Us
                      </a>
                      <a href="about.html" className="vs-btn style3">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <form
                    className="form-style1 ajax-contact"
                    action="mail.php"
                    method="post"
                    onSubmit={formik.handleSubmit}
                  >
                    <img
                      src="assets/img/shapes/f-1-1.png"
                      alt="form shape"
                      className="shape-1"
                    />
                    <img
                      src="assets/img/shapes/f-1-2.png"
                      alt="form shape"
                      className="shape-2"
                    />
                    <h3 className="title ">Login Now</h3>
                    <span className="subtitle"></span>
                    <div className="row gx-20">
                      <div className="col-md-12 form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          id="funame"
                          placeholder="password"
                          onChange={formik.handleChange}
                        />
                      </div>

                      <div className="col-md-12 form-group">
                        <button className="vs-btn style2" type="submit">
                          Login Now
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messages mb-0 mt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
