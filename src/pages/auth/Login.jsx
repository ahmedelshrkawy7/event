import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import logoWh from "../../assets/logo-white.png";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      navigate("/dashboard");
      console.log("====================================");
      console.log(values);
      console.log("====================================");
      axios
        .post("https://event-back-7ebi.vercel.app/api/auth/login", values)
        .then((res) => {
          navigate("/dashboard");
          toast.success("Logged in");
          localStorage.setItem("token" ,"#1258$56!@")
        });
    },
  });
  console.log(formik.values);

  return (
    <section className="h-screen">
      <div
        className="vs-carousel style1"
        data-autoplay="false"
        data-slide-show="1"
        data-fade="true"
        data-arrows="false"
      >
        <div>
          <div className="hero-inner !pt[210px]">
            <div className="overlay"></div>
            <div
              className="hero-bg !bg-black "
              data-bg-src="assets/img/bg/h-1-1.jpg"
              style={{ backgroundImage: "none" }}
            ></div>
            {/* <Link to="/dashboard">dash</Link> */}
            <div className="container flex justify-center">
              <div className="flex items-center sm:w-[550px] justify-center">
                <div className="">
                  <form
                    className="form-style1 flex  flex-col gap-2 items-center ajax-contact bg-[#02bb5b]"
                    action="mail.php"
                    method="post"
                    onSubmit={formik.handleSubmit}
                    // style={{
                    //   background:
                    //     "linear-gradient(135deg, #024cbb 24%, #006 97%)",
                    // }}
                  >
                    <img src={logoWh} className="w-72" />
                    <h3 className="title !text-3xl !mb-10 ">Admin Dashboard</h3>

                    <div className="row gx-20">
                      <div className="col-md-12 form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          id="funame"
                          placeholder="user name"
                          onChange={formik.handleChange}
                        />
                        <span className="text-white absolute bottom-[-23px] left-[20px]">
                          {formik.errors.email}
                        </span>
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          id="email"
                          placeholder="password"
                          onChange={formik.handleChange}
                        />
                        <span className="text-white absolute bottom-[-23px] left-[20px]">
                          {formik.errors.password}
                        </span>
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
