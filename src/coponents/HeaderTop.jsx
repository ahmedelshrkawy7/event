import { useRef, forwardRef } from "react";
import logo from "../assets/SiteLogo.png";

const HeaderTop = forwardRef((props, ref) => {
  const section = useRef();

  return (
    <header className="vs-header">
      {/* <!-- Header Top --> */}
      <div className="header-top v3">
        <div className="container">
          <div className="row align-items-center justify-content-between gy-1 text-center text-lg-start">
            <div className="col-lg-auto d-none d-lg-block">
              <p className="header-text style2 d-none d-inline-flex">
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                <a href="tel:+052 (699) 256 - 693">052 (699) 256 - 693</a>
              </p>
              <p className="header-text style2">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Arraya Tower, Floor 46 ,Kuwait City, Sharq
              </p>
              <p className="header-text style2">
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <a href="mailto:Info@example.com">sales@zakq8.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          {/* <!-- Main Menu Area --> */}
          <div className="sticky-wrapper vs-navbar style3">
            <div className="sticky-active">
              <div className="flex items-center justify-between">
                <div className="">
                  <div className="header-logo">
                    <a>
                      <img
                        src={logo}
                        alt="Eventino"
                        className="logo w-40 sm:w-64"
                        width="250"
                        height="60px"
                      />
                    </a>
                  </div>
                </div>

                <div className="">
                  <div className="header-btns v3">
                    <div className=" d-lg-none d-md-flex d-xl-flex ">
                      <a
                        className="vs-btn cursor-pointer sm:w-48   !sm:text-3xl  h-10 sm:h-16 p-2 !sm:p-20 !flex !items-center justify-center  "
                        tabIndex="0"
                        onClick={() => {
                          ref?.current?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Registegr Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default HeaderTop;
