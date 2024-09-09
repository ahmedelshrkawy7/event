import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import f1 from "../../assets/f-1-1.png";
import f2 from "../../assets/f-1-2.png";

const Register2 = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      jobTitle: 1,
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
    <div className="container mt-24">
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
            />
          </div>
          <div className="col-md-4 form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-md-4 form-group">
            <input
              className="form-control"
              type="tel"
              name="phone"
              id="tel"
              placeholder="Phone Number"
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-md-4 form-group">
            <input
              className="form-control"
              type="tel"
              name="companyName"
              id="tel"
              placeholder="companyName"
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-md-4 form-group">
            <input
              className="form-control"
              type="tel"
              name="jobTitle"
              id="tel"
              placeholder="job title"
              onChange={formik.handleChange}
            />
          </div>

          <div className="col-md-4 form-group">
            <button className="vs-btn style2 mt-0 w-100" type="submit">
              Register Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register2;
