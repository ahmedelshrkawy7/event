import logo from "../assets/logo.png";

const Panner = () => {
  return (
    <div>
      {" "}
      <div className="container mt-12">
        <div className="header-inner h-40 flex items-center !justify-between">
          <div className="menu-top flex justify-between w-full">
            <div className="flex gx-50 justify-content-between align-items-center gx-sm-0 w-full p-6">
              <div className=" flex justify-between w-1/3 ">
                <div className=" mr-10 ">
                  <a href="index.html">
                    <img src={logo} className=" w-64" />
                  </a>
                </div>
              </div>
              <div className="flex  justify-between w-2/3">
                <div className=" header-info d-none d-lg-flex pe-0">
                  <div className="header-info_icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="media-body">
                    <span className="header-info_label">Email Us:</span>
                    <div className="header-info_link">
                      <a href="mailto:example@gmail.com">example@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className=" header-info d-none d-lg-flex pe-0">
                  <div className="header-info_icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="media-body">
                    <span className="header-info_label">Call us 24/7</span>
                    <div className="header-info_link">
                      <a href="tel:+052699256693">052 (699) 256 - 693</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-auto">
                <div className="d-none d-xl-inline-flex"></div>
                <button className="vs-menu-toggle d-inline-block d-lg-none">
                  <i className="fal fa-bars"></i>
                </button>
              </div> */}
            </div>
          </div>
          {/* <!-- Main Menu Area --> */}
        </div>
      </div>
    </div>
  );
};

export default Panner;
