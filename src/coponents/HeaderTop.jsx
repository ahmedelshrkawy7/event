function HeaderTop() {
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
                245x Town 1214 Street, USA
              </p>
              <p className="header-text style2">
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <a href="mailto:Info@example.com">Info@example.com</a>
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
              <div className=" flex items-center justify-between">
                <div className="">
                  <div className="header-logo">
                    <a href="index.html">
                      <img
                        src="https://hr-ess.zakq8.com/SiteLogo.ashx"
                        alt="Eventino"
                        className="logo"
                        width="250"
                        height="60px"
                      />
                    </a>
                  </div>
                </div>

                <div className="">
                  <div className="header-btns v3">
                    <div className="d-none d-lg-none d-md-flex d-xl-flex">
                      <a href="about.html" className="vs-btn" tabindex="0">
                        Booking Now
                      </a>
                    </div>

                    <button className="vs-menu-toggle d-inline-block d-lg-none">
                      <i className="fal fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderTop;
