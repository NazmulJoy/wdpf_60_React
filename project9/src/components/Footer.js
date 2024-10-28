import React from "react";
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer className="footer-area bg-gray">
      <div className="footer-subscribe">
        <div className="container">
          <form className="footer-subscribe-inner">
            <div className="row">
              <div className="col-lg-5">
                <div className="single-input-inner style-border-bottom">
                  <input type="text" placeholder="Your Full Name" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="single-input-inner style-border-bottom">
                  <input type="text" placeholder="Your Email Address" />
                </div>
              </div>
              <div className="col-lg-2">
                <Link className="btn btn-base" to="#">
                  Subscribe
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_contact">
                <h4 className="widget-title">Contact Us</h4>
                <ul className="details">
                  <li>
                    <i className="fa fa-map-marker"></i> Dhaka Metro Scout
                    Bhaban(1st Floor), 54, Inner Circular Road, Dhaka-1000
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> TCLK@gmail.com
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> +880 2 9183001 - 2
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Course</h4>
                <ul>
                  <li>
                    <Link to="course.html">Web Development</Link>
                  </li>
                  <li>
                    <Link to="course.html">Mobile App Development </Link>
                  </li>
                  <li>
                    <Link to="course.html">Java for Professionals</Link>
                  </li>
                  <li>
                    <Link to="course.html">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="course.html">Artificial Intelligence</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_blog_list">
                <h4 className="widget-title">Study</h4>
                <ul>
                  <li>
                    <h6>
                      <Link to="blog-details.html">Admission Policy</Link>
                    </h6>
                    <span className="date">
                      <i className="fa fa-calendar"></i>
                    </span>
                  </li>
                  <li>
                    <h6>
                      <Link to="blog-details.html">Online Application</Link>
                    </h6>
                    <span className="date">
                      <i className="fa fa-calendar"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_contact">
                <h4 className="widget-title">Twitter Feed</h4>
                <ul className="details">
                  <li>
                    <i className="fa fa-twitter"></i>
                    <Link to="#">https//tweets/c3l.com</Link>
                    <div className="time">9 Hours ago</div>
                  </li>
                  <li>
                    <i className="fa fa-twitter"></i>
                    <Link to="#">https//tweets/c7l.com</Link>
                    <div className="time">9 Hours ago</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 align-self-center">
              <Link to="index.html">
                <img src="assets/img/tclk.jpg" alt="img" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-12 text-md-right align-self-center">
              <ul className="social-media mt-md-0 mt-3">
                <li>
                  <Link className="facebook" to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="twitter" to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link className="instagram" to="#">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link className="youtube" to="#">
                    <i className="fa fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link className="pinterest" to="#">
                    <i className="fa fa-pinterest"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-lg-8 text-lg-center align-self-center mt-lg-0 mt-3">
              <p>Copyright 2024 by TCLK.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/*<!-- back to top area start -->*/}
    <div className="back-to-top">
      <span className="back-top"><i className="fa fa-angle-up"></i></span>
    </div>
    {/*<!-- back to top area end -->*/}
    </>
  );
}
