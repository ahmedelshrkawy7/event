import axios from "axios";
import { useFormik } from "formik";
import React, { forwardRef } from "react";
import { toast } from "react-toastify";
import f1 from "../../assets/f-1-1.png";
import f2 from "../../assets/f-1-2.png";
import footer1 from "../../assets/footer-2-1.png";
import footer2 from "../../assets/footer-2-2.png";
import * as Yup from "yup";
import swal from "sweetalert";

const Register2 = forwardRef((props, ref) => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full Name is required")
      .min(3, "Full Name must be at least 3 characters"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (c) => {
      console.log("====================================");
      console.log(c);
      console.log("====================================");
      axios
        .post("https://event-back-7ebi.vercel.app/api/auth/register", c)
        .then((res) => {
          // toast.success(
          //   "Thank you for booking your spot at Think AI & Beyond The Future Intelligence, see you on 30th of September 2024"
          // );
          swal({
            title: "Check your email now, please",

            icon: "success",
            buttons: {
              confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "swal-button--custom",
                closeModal: true,
              },
            },
          });
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
          className="shape-mockup  d-xl-block z-index-negative"
          data-top="0%"
          data-left="0%"
        >
          <img src={footer1} alt="footer shape" />
        </div>
        <div
          className="shape-mockup  d-xl-block z-index-negative end-0 bottom-0"
          data-bottom="0%"
          data-right="0%"
        >
          <img src={footer2} alt="footer shape" />
        </div>
        <div className="widget-area">
          <div className="flex justify-center relative z-[999]">
            <h1 className="text-white text-5xl">Booking Now</h1>
          </div>
          <div className="container">
            <div className="container sm:my-40">
              <form
                className="form-style2 m-0  "
                onSubmit={formik.handleSubmit}
              >
                <img src={f1} alt="form shape" className="shape-1" />
                <img src={f2} alt="form shape" className="shape-2" />
                <div className="row gx-20">
                  <div className="col-md-4 form-group flex flex-col  items-start">
                    <label htmlFor="" className="text-white">
                      Full Name *
                    </label>
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
                  <div className="col-md-4 form-group flex flex-col  items-start">
                    <label htmlFor="" className="text-white">
                      Email *
                    </label>
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
                  <div className="col-md-4 form-group flex flex-col  items-start">
                    <label htmlFor="" className="text-white">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      type="tel"
                      name="phone"
                      id="tel"
                      placeholder="Phone Number"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </div>
                  <div className="col-md-4 form-group flex flex-col  items-start">
                    <label htmlFor="" className="text-white">
                      Company Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Company Name"
                      onChange={formik.handleChange}
                      value={formik.values.companyName}
                    />
                  </div>
                  <div className="col-md-4 form-group flex flex-col  items-start">
                    <label htmlFor="" className="text-white">
                      Job Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      placeholder="Job Title"
                      onChange={formik.handleChange}
                      value={formik.values.jobTitle}
                    />
                  </div>
                  <div className="col-md-4 form-group flex flex-col  items-start justify-center">
                    <label htmlFor=""></label>
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
                  Copyright © 2024 <a href="index.html"></a>. All rights
                  reserved by <a>ALEXON Enterprise Innovations</a>.
                </p>
                {/* All rights reserved. Copyrights © 2024 Powered by ALEXON Enterprise Innovations */}
              </div>
              {/* All rights reserved. Copyrights ©️ 2024 Powered by ALEXON Enterprise Innovations */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});

export default Register2;
