import React from "react";
import img from "../assets/New Project.png";
import img1 from "../assets/New Project (1).png";

const About = () => {
  return (
    <section className="about space-top space-extra-bottom mt-36 sm:mt-0">
      <div className="container">
        <div className="row gx-40 align-items-center">
          <div className="col-lg-6">
            <div className="img-box3 text-center">
              <div className="card-style2">
                <span className="number">
                  <span>30th</span>
                </span>
                <h3 className="title"> September 2024</h3>
              </div>
              <div className="img1">
                <img src={img} alt="About Image" />
              </div>
              <div className="img2">
                <img src={img1} alt="About Image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <span className="sec-subtitle">About Event</span>
            <h2 className="sec-title">
              Think AI & Beyond:
              <br /> The Future Intelligence
            </h2>
            <p>
              We are delighted to invite you to our upcoming event, "ThinkAI &
              Beyond: The Future Intelligence," set to take place on{" "}
              <span className="font-semibold">
                {" "}
                30th September 2024 at Radisson Blu Hotel & Dasman Ballroom.
              </span>{" "}
              This premier gathering will explore the transformative impact of
              artificial intelligence and its future potential across various
              industries. Join us for an engaging day filled with insightful
              discussions, cutting-edge presentations, and interactive sessions
              led by industry leaders and visionaries. Discover how AI is
              shaping the future of technology and innovation and gain valuable
              insights into emerging trends and strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
