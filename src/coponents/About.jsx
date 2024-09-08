import React from 'react'

const About = () => {
  return (
    <section className="about space-top space-extra-bottom">
    <div className="container">
      <div className="row gx-40 align-items-center">
        <div className="col-lg-6 mb-30">
          <div className="img-box1">
            <div className="card-style1">
              <span className="number"><span>15</span>+</span>
              <h3 className="title">Years of Experience</h3>
            </div>
            <div className="img-1">
              <img src="assets/img/about/a-1-1.jpg" alt="about 1 1"/>
            </div>
            <div className="img-2">
              <img src="assets/img/about/a-1-2.jpg" alt="about 1 2"/>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-30">
          <span className="sec-subtitle">About Us</span>
          <h2 className="sec-title">We Are Eventino, No. 1 Event Management Agency</h2>
          <p>Lorem ipsum dolor sit amet. Rem enim sapiente sit omnis iste sit on The best of architecto asperiores aut
            repellendus quam. Id unde harum qui quos beatae aut saepe omnis sit modi tenetur qui deleniti laudantium quo
            rerum ipsa.</p>
          <div className="img-3">
            <img src="assets/img/about/a-1-3.jpg" alt="about 1 3"/>
          </div>
          <div className="list-style1">
            <ul>
              <li><i className="fal fa-check-circle"></i> Non consectetur a erat nam at lectus urna</li>
              <li><i className="fal fa-check-circle"></i> Odio aenean sed adipiscing diam donec adipiscing.</li>
            </ul>
          </div>
          <div className="d-inline-flex">
            <a href="about.html" className="vs-btn" tabindex="0">
              More Information
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About