import React from "react";
import { Link } from "react-router-dom";

export default function About() {
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
              <h2 className="page-title">About Us</h2>
              <ul className="page-list">
                <li>
                  <Link to="index.html">Home</Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb end */}

      {/* about area start */}
      <div className="about-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="about-area-inner">
            <div className="row">
              <div className="col-lg-6 col-md-10">
                <div
                  className="about-thumb-wrap after-shape"
                  style={{
                    backgroundImage: "url(assets/img/codifyformatter.jpg)",
                  }}
                ></div>
              </div>
              <div className="col-lg-6">
                <div className="about-inner-wrap">
                  <div className="section-title mb-0">
                    <h6 className="sub-title right-line">ABOUT US</h6>
                    <h2 className="title">Empowering Futures in IT</h2>
                    <p className="content">
                      Expert instructors providing industry-leading guidance.
                      Hands-on learning approach for practical skill
                      development. Flexible schedules and tailored options to
                      suit your needs.
                    </p>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="single-list-wrap">
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Experienced
                            Professionals
                          </li>
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Practical Training
                          </li>
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Personalized Plans
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="single-list-wrap">
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Employment
                            Assistance
                          </li>
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Current Industry
                            Trends
                          </li>
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Interactive
                            Environment
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Link className="btn btn-border-black" to="about.html">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}

      {/* counter area start */}
      <div className="counter-area bg-gray">
        <div className="container">
          <div
            className="counter-area-inner pd-top-110 pd-bottom-120"
            style={{ backgroundImage: "url(assets/img/other/1.png)" }}
          >
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="section-title mb-0">
                  <h6 className="sub-title right-line">Our Achievements</h6>
                  <h2 className="title">Proven Success</h2>
                  <p className="content pb-3">
                    At TCLK, we pride ourselves on our impressive achievements
                    and the vibrant community we've built. Here are some quick
                    facts that highlight our journey: Over 5,000 students
                    trained, 200+ expert instructors, 95% job placement rate,
                    300+ successful projects, 50+ industry partnerships, Join us
                    and be a part of our growing success story!
                  </p>
                  <div className="btn-counter bg-base mt-4">
                    <h3 className="left-val align-self-center">
                      <span className="counter">2.4</span>k+
                    </h3>
                    <div className="right-val align-self-center">
                      Successful <br />
                      students
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <ul className="single-list-wrap">
                  <li className="single-list-inner style-box-bg">
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/icon/1.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5>
                          <span className="counter">1200</span>+
                        </h5>
                        <p>Learners & counting</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list-inner style-box-bg">
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/icon/2.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5>
                          <span className="counter">320</span>+
                        </h5>
                        <p>Total courses</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list-inner style-box-bg">
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/icon/3.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5>
                          <span className="counter">1340</span>+
                        </h5>
                        <p>Successful students</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter area end */}

      {/* team area start */}
      <div className="team-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center">
                <h6 className="sub-title double-line">Meet Our Team</h6>
                <h2 className="title">Our Creative Team</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner">
                <div className="thumb">
                  <img src="assets/img/sir1.png" alt="img" />
                  <div className="social-wrap">
                    <div className="social-wrap-inner">
                      <Link className="social-share" to="#">
                        <i className="fa fa-share-alt"></i>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-pinterest"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h4>
                    <Link to="#">Syed Ziaul Habib</Link>
                  </h4>
                  <span>WEB Expert</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner">
                <div className="thumb">
                  <img src="assets/img/sir2.png" alt="img" />
                  <div className="social-wrap">
                    <div className="social-wrap-inner">
                      <Link className="social-share" to="#">
                        <i className="fa fa-share-alt"></i>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-pinterest"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h4>
                    <Link to="#">Anisul Haque</Link>
                  </h4>
                  <span>GAV Expert</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner">
                <div className="thumb">
                  <img src="assets/img/sir3.png" alt="img" />
                  <div className="social-wrap">
                    <div className="social-wrap-inner">
                      <Link className="social-share" to="#">
                        <i className="fa fa-share-alt"></i>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-pinterest"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h4>
                    <Link to="#">Pritom Barman</Link>
                  </h4>
                  <span>AI Expert</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner">
                <div className="thumb">
                  <img src="assets/img/sir4.png" alt="img" />
                  <div className="social-wrap">
                    <div className="social-wrap-inner">
                      <Link className="social-share" to="#">
                        <i className="fa fa-share-alt"></i>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-pinterest"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h4>
                    <Link to="#">Pritom Barman</Link>
                  </h4>
                  <span>AI Expert</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner">
                <div className="thumb">
                  <img src="assets/img/sir5.png" alt="img" />
                  <div className="social-wrap">
                    <div className="social-wrap-inner">
                      <Link className="social-share" to="#">
                        <i className="fa fa-share-alt"></i>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-pinterest"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h4>
                    <Link to="#">Pritom Barman</Link>
                  </h4>
                  <span>AI Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team area end */}

      {/* speciality area start */}
      <div className="spaciality-area mg-top--170">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="testimonial-area-inner bg-cover h-100"
                style={{ backgroundImage: "url(assets/img/other/2.png)" }}
              >
                <img
                  className="testimonial-right-img"
                  src="assets/img/human1.png"
                  alt="img"
                />
                <div className="single-testimonial-inner style-white">
                  <h4 className="text-white">A Journey to Excellence.</h4>
                  <p className="mb-4">
                    Welcome to our IT Center, where excellence is the
                    destination.
                  </p>
                  <ul className="single-list-wrap">
                    <li className="single-list-inner style-check-box">
                      <i className="fa fa-check"></i> Cutting-edge technology
                      education
                    </li>
                    <li className="single-list-inner style-check-box">
                      <i className="fa fa-check"></i> Expert-led instruction
                    </li>
                    <li className="single-list-inner style-check-box">
                      <i className="fa fa-check"></i> Tailored learning
                      experiences
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="subscribe-inner-area h-100"
                style={{ backgroundColor: "var(--main-color)" }}
              >
                <h3>Committed to educating and nurturing all students</h3>
                <p>
                  Empowering and guiding every student's journey to success.
                </p>
                <div className="single-input-inner">
                  <input type="text" placeholder="Email Address" />
                  <button className="btn btn-black">
                    <i className="fa fa-envelope"></i> Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* speciality area end */}

      {/*pricing-area start*/}
      <div
        className="pricing-area pd-top-280 pd-bottom-120 text-center"
        style={{ backgroundImage: "url(assets/img/bg/pricing-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-11">
              <div className="section-title text-center">
                <h6 className="sub-title double-line">Student Testimonials</h6>
                <h2 className="title">What our student say</h2>
              </div>
            </div>
          </div>
          <div className="testimonial-slider-2 owl-carousel">
            <div className="item">
              <div className="single-testimonial-inner">
                <span className="testimonial-quote">
                  <i className="fa fa-quote-right"></i>
                </span>
                <p>
                  "Transformative course! I now feel confident in my web
                  development skills. Highly recommend!"
                </p>
                <div className="media testimonial-author">
                  <div className="media-left">
                    <img
                      src="assets/img/1s-fotor-2024052893658.png"
                      alt="img"
                    />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>Nazmul Hasan Joy</h6>
                    <p>Web Development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-testimonial-inner">
                <span className="testimonial-quote">
                  <i className="fa fa-quote-right"></i>
                </span>
                <p>
                  "Life-changing course! Enhanced my graphic design skills
                  immensely. Grateful for this opportunity!"
                </p>
                <div className="media testimonial-author">
                  <div className="media-left">
                    <img src="assets/img/it65.png" alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                  <h6>Shila Akter</h6>
                    <p>Graphic Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-testimonial-inner">
                <span className="testimonial-quote">
                  <i className="fa fa-quote-right"></i>
                </span>
                <p>
                  "Life-changing course! Enhanced my graphic design skills
                  immensely. Grateful for this opportunity!"
                </p>
                <div className="media testimonial-author">
                  <div className="media-left">
                    <img
                      src="assets/img/3s-fotor-2024052893731-removebg-preview.png"
                      alt="img"
                    />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>Abdullah al hossain</h6>
                    <p>Graphic Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*pricing-area end*/}

      {/*events-area start*/}
      <div className="events-area pd-top-110 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-11">
              <div className="section-title text-center">
                <h6 className="sub-title double-line">EVENTS</h6>
                <h2 className="title">Upcoming Demo classNamees</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul
                className="single-blog-list-wrap style-white"
                style={{ backgroundColor: "var(--heading-color)" }}
              >
                <li>
                  <div className="media single-blog-list-inner style-white">
                    <div className="media-left date">
                      <span>MAY</span>
                      30
                    </div>
                    <div className="media-body details">
                      <ul className="blog-meta">
                        <li>
                          <i className="fa fa-user"></i> Syed Ziaul Habib
                        </li>
                        <li>
                          <i className="fa fa-folder-open-o"></i> Web
                          Development
                        </li>
                      </ul>
                      <h5>
                        <Link to="blog-details.html">
                          Join for Web Dev. Excellence
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media single-blog-list-inner">
                    <div className="media-left date">
                      <span>JUNE</span>
                      04
                    </div>
                    <div className="media-body details">
                      <ul className="blog-meta">
                        <li>
                          <i className="fa fa-user"></i> Jannatul Ferdous Oishee
                        </li>
                        <li>
                          <i className="fa fa-folder-open-o"></i> Graphic Design
                        </li>
                      </ul>
                      <h5>
                        <Link to="blog-details.html">
                          Seize Graphic Design Mastery Opportunity
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media single-blog-list-inner">
                    <div className="media-left date">
                      <span>JUNE</span>
                      18
                    </div>
                    <div className="media-body details">
                      <ul className="blog-meta">
                        <li>
                          <i className="fa fa-user"></i> Ankon bhattacharya
                        </li>
                        <li>
                          <i className="fa fa-folder-open-o"></i> Artificial
                          intelligence
                        </li>
                      </ul>
                      <h5>
                        <Link to="blog-details.html">
                          Dive Deep into AI Mastery{" "}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="event-thumb">
                <img
                  src="assets/img/resized-image-Promo3.jpeg"
                  height="380px"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*events-area end*/}
    </>
  );
}
