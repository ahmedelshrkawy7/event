import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../../includes/Nav";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      chosenPackage: "",
      ticketQuantity: 1,
    },
    onSubmit: (c) => {
      console.log("====================================");
      console.log(c);
      console.log("====================================");
      axios
        .post("http://localhost:8800/api/auth/register", c)
        .then((res) => {
          toast.success(res.data.message);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
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
                    <h3 className="title ">Register Now</h3>
                    <span className="subtitle">Make A Booking</span>
                    <div className="row gx-20">
                      <div className="col-md-12 form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="fullName"
                          id="funame"
                          placeholder="Full Name"
                          onChange={formik.handleChange}
                        />
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
                      </div>
                      <div className="col-md-12 form-group">
                        <select
                          className="form-control"
                          name="chosenPackage"
                          id="subject"
                          onChange={formik.handleChange}
                        >
                          <option value="Choose Package">Company Name</option>
                          <option value="Oil Change">Oil Change</option>
                          <option value="Tire Rotation">Tire Rotation</option>
                          <option value="Brake Inspection">
                            Brake Inspection
                          </option>
                          <option value="Engine Tune-Up">Engine Tune-Up</option>
                          <option value="Transmission Flush">
                            Transmission Flush
                          </option>
                        </select>
                      </div>
                      <div className="col-md-12 form-group">
                        <select
                          className="form-control"
                          name="ticketQuantity"
                          id="subject"
                          onChange={formik.handleChange}
                        >
                          <option value="Ticket Quantity">Job Title</option>
                          <option value="Oil Change">Oil Change</option>
                          <option value="Tire Rotation">Tire Rotation</option>
                          <option value="Brake Inspection">
                            Brake Inspection
                          </option>
                          <option value="Engine Tune-Up">Engine Tune-Up</option>
                          <option value="Transmission Flush">
                            Transmission Flush
                          </option>
                        </select>
                      </div>
                      <div className="col-md-12 form-group">
                        <button className="vs-btn style2" type="submit">
                          Register Now
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

export default Register;
