import React from "react";

export const Schedule = () => {
  return (
    <div className="">
      <footer className="footer-layout2 shape-mockup-wrap">
        <div
          className="shape-mockup d-none d-xl-block z-index-negative"
          data-top="0%"
          data-left="0%"
        >
          <img src="assets/img/shapes/footer-2-1.png" alt="footer shape" />
        </div>
        <div
          className="shape-mockup d-none d-xl-block z-index-negative end-0 bottom-0"
          data-bottom="0%"
          data-right="0%"
        >
          <img src="assets/img/shapes/footer-2-2.png" alt="footer shape" />
        </div>
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-lg-4 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">
                    About Company
                    <img src="assets/img/shapes/d-1-1.svg" />
                  </h3>
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src="assets/img/logo-white.svg"
                        alt="Eventino"
                        className="logo"
                      />
                    </a>
                  </div>
                  <div className="vs-widget-about">
                    <p className="footer-text">
                      Vestibulum ac diam sit amet quam vehicula on the elementum
                      sed amet dui molestie Curabitur arcu erat, accumsan id
                      imperdiet
                    </p>
                    <div className="footer-social">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">
                    Quick Link
                    <img src="assets/img/shapes/d-1-1.svg" />
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="about.html">
                          About Us <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="about.html">
                          Our Mission <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="service.html">
                          Our Services <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="service.html">
                          Our Project <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="team.html">
                          Our Team <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          Blog Post <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          Contact Us <span></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">
                    Explore
                    <img src="assets/img/shapes/d-1-1.svg" />
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="about.html">
                          What We Offer <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="about.html">
                          Our Story <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          Latest Post <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          Help Center <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="about.html">
                          Terms & Condition <span></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <h3 className="widget_title">
                    Contact Us
                    <img src="assets/img/shapes/d-1-1.svg" />
                  </h3>
                  <div className="footer-info style2">
                    <div className="footer-info_icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <span className="footer-info_label">Phone No:</span>
                      <div className="footer-info_link">
                        <a href="tel:+1 0109 -1812-347">+1 0109-1812-347</a>
                      </div>
                    </div>
                  </div>
                  <div className="footer-info style2">
                    <div className="footer-info_icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="media-body">
                      <span className="footer-info_label">Email Address:</span>
                      <div className="footer-info_link">
                        <a href="mailto:Info@eventino.com">Info@eventino.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="footer-info style2">
                    <div className="footer-info_icon">
                      <i className="fas fa-location"></i>
                    </div>
                    <div className="media-body">
                      <div className="footer-info_link">
                        12/7 new town, 245x Town 1214 Street, United State
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom2">
          <div className="newsletter-form2">
            <div className="overlay"></div>
            <div className="container">
              <form action="mail.php">
                <div className="row g-4 justify-content-between align-items-center">
                  <div className="col-xl-4 col-lg-6">
                    <h2 className="sec-title h4 mb-0 text-white">
                      Subscribe Our Newsletter
                    </h2>
                    <p className="sec-text text-white">
                      Subscribe email and get recent news and updates
                    </p>
                  </div>
                  <div className="col-xl-auto col-lg-6">
                    <div className="form-group mb-0">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Email"
                      />
                      <button className="vs-btn style4">Subscribe Now</button>
                    </div>
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
              <div className="col-auto">
                <nav className="footer-menu">
                  <ul>
                    <li className="menu-item">
                      <a href="about.html">Terms &amp; Condition</a>
                    </li>
                    <li className="menu-item">
                      <a href="about.html">Privacy</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
