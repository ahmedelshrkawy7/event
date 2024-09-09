import axios from "axios";
import { useFormik } from "formik";
import React, { forwardRef } from "react";
import { toast } from "react-toastify";
import f1 from "../../assets/f-1-1.png";
import f2 from "../../assets/f-1-2.png";
import footer1 from "../../assets/footer-2-1.png";
import footer2 from "../../assets/footer-2-2.png";
import * as Yup from "yup";

const Register2 = forwardRef((props, ref) => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full Name is required")
      .min(3, "Full Name must be at least 3 characters"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    phone: Yup.string().required("Phone number is required"),
    companyName: Yup.string()
      .required("Company Name is required")
      .min(2, "Company Name must be at least 2 characters"),

    jobTitle: Yup.string().required("Job Title is required"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      jobTitle: "",
    },
    validationSchema: validationSchema,
    onSubmit: (c) => {
      console.log("====================================");
      console.log(c);
      console.log("====================================");
      axios
        .post("https://event-back-7ebi.vercel.app/api/auth/register", c)
        .then((res) => {
          toast.success(
            "Thank you for booking your spot at Think AI & Beyond The Future Intelligence, see you on 30th of September 2024"
          );
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    },
  });
  return (
    <>
      <footer className="footer-layout2 shape-mockup-wrap mt-10" ref={ref}>
        <div
          className="shape-mockup d-none d-xl-block z-index-negative"
          data-top="0%"
          data-left="0%"
        >
          <img src={footer1} alt="footer shape" />
        </div>
        <div
          className="shape-mockup d-none d-xl-block z-index-negative end-0 bottom-0"
          data-bottom="0%"
          data-right="0%"
        >
          <img src={footer2} alt="footer shape" />
        </div>
        <div className="widget-area">
          <div className="flex justify-center">
            <h1 className="text-white text-5xl">Booking Now</h1>
          </div>
          <div className="container">
            <div className="container my-40">
              <form className="form-style2 " onSubmit={formik.handleSubmit}>
                <img src={f1} alt="form shape" className="shape-1" />
                <img src={f2} alt="form shape" className="shape-2" />
                <div className="row gx-20">
                  <div className="col-md-4 form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="fullName"
                      id="funame"
                      placeholder="Full Name"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                    />
                    {formik.errors.fullName && formik.touched.fullName && (
                      <div className="text-white">{formik.errors.fullName}</div>
                    )}
                  </div>
                  <div className="col-md-4 form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <div className="text-white">{formik.errors.email}</div>
                    )}
                  </div>
                  <div className="col-md-4 form-group">
                    <input
                      className="form-control"
                      type="tel"
                      name="phone"
                      id="tel"
                      placeholder="Phone Number"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                    {formik.errors.phone && formik.touched.phone && (
                      <div className="text-white">{formik.errors.phone}</div>
                    )}
                  </div>
                  <div className="col-md-4 form-group">
                    <input
                      className="form-control"
                      type="tel"
                      name="companyName"
                      id="companyName"
                      placeholder="Company Name"
                      onChange={formik.handleChange}
                      value={formik.values.companyName}
                    />
                    {formik.errors.companyName &&
                      formik.touched.companyName && (
                        <div className="text-white">
                          {formik.errors.companyName}
                        </div>
                      )}
                  </div>
                  <div className="col-md-4 form-group">
                    <input
                      className="form-control"
                      type="tel"
                      name="jobTitle"
                      id="jobTitle"
                      placeholder="Job Title"
                      onChange={formik.handleChange}
                      value={formik.values.jobTitle}
                    />
                    {formik.errors.jobTitle && formik.touched.jobTitle && (
                      <div className="text-white">{formik.errors.jobTitle}</div>
                    )}
                  </div>
                  <div className="col-md-4 form-group">
                    <button
                      className="vs-btn style2 mt-0 w-100 hover:bg-black"
                      type="submit"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright-wrap">
            <div className="row justify-content-center justify-content-lg-between">
              <div className="col-auto">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright"></i> 2024{" "}
                  <a href="index.html">Eventino</a>. All rights reserved by{" "}
                  <a href="https://themeforest.net/user/vecuro_themes">
                    Vecuro
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});

export default Register2;
