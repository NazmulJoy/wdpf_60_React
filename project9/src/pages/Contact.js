import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      {/* breadcrumb start */}
      <div
        className="breadcrumb-area bg-overlay"
        style={{ backgroundImage: "url(assets/img/out.jpeg)" }}
      >
        <div className="container">
          <div className="breadcrumb-inner">
            <div className="section-title mb-0 text-center">
              <h2 className="page-title">Contact</h2>
              <ul className="page-list">
                <li>
                  <Link to="index.html">Home</Link>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb end */}

      {/* contact list start */}
      <div className="contact-list pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="contact-list-inner">
                <div className="media">
                  <div className="media-left">
                    <img src="assets/img/icon/17.png" alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h5>Our Phone</h5>
                    <p>+880 2 9183001 - 2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-list-inner">
                <div className="media">
                  <div className="media-left">
                    <img src="assets/img/icon/18.png" alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h5>Our Email</h5>
                    <p>TCLK@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-list-inner">
                <div className="media">
                  <div className="media-left">
                    <img src="assets/img/icon/16.png" alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h5>Our Address</h5>
                    <p>
                      Dhaka Metro Scout Bhaban(1st Floor), 54, Inner Circular
                      Road, Dhaka-1000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact list end */}

      {/* counter area start */}
      <div className="counter-area pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title mb-0">
                <h6 className="sub-title right-line">Get in touch</h6>
                <h2 className="title">Write Us a Message</h2>
                <p className="content pb-3">
                  At TCLK, we empower individuals with top-notch IT education,
                  combining expert instruction and hands-on learning. Join us to
                  excel in the tech industry with flexible courses and
                  comprehensive career support.
                </p>
                <ul className="social-media style-base pt-3">
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form className="contact-form-inner mt-5 mt-md-0">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-input-inner style-bg-border">
                      <input type="text" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input-inner style-bg-border">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="single-input-inner style-bg-border">
                      <input type="text" placeholder="Email" />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="single-input-inner style-bg-border">
                      <input type="text" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner style-bg-border">
                      <textarea placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-base">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* counter area end */}

      {/* contact area start */}
      <div className="contact-g-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd"></iframe>
      </div>
      {/* contact area end */}
    </>
  );
}
