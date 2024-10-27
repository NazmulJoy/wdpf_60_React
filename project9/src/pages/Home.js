import React from "react";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/*<!-- banner start -->*/}
      <div
        className="banner-area banner-area-2"
        style={{ backgroundImage: "url(assets/img/banner/5.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 align-self-center">
              <div className="banner-inner style-white text-center text-lg-left">
                <h6 className="b-animate-1 sub-title">Unlock Your Potential</h6>
                <h1 className="b-animate-2 title">
                  Welcome to TCLK: Empowering IT Skills Development
                </h1>
                <Link 
                  className="btn btn-base b-animate-3 mr-sm-3 mr-2"
                  to="blog.php"
                >
                  Enroll
                </Link> 
                <Link  className="btn btn-border-white b-animate-3" to="blog.php">
                  Read More
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- banner end -->*/}

      {/*<!-- intro start -->*/}
      <div className="intro-area intro-area--top">
        <div className="container">
          <div className="intro-area-inner-2">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h6 className="sub-title double-line">FEATURES</h6>
                  <h2 className="title">
                    Explore TCLK's <br />
                    IT Courses
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="single-intro-inner style-thumb text-center">
                  <div className="thumb">
                    <img src="assets/img/intro/4.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>Expert Instructors</h5>
                    <p>Industry-Leading Experts</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-intro-inner style-thumb text-center">
                  <div className="thumb">
                    <img src="assets/img/intro/5.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>Hands-On Learning</h5>
                    <p>Practical Application Approach</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-intro-inner style-thumb text-center">
                  <div className="thumb">
                    <img src="assets/img/intro/6.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>Flexible Schedules</h5>
                    <p>Tailored Learning Options</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-footer bg-base">
              <div className="row">
                <div className="col-md-4">
                  <div className="single-list-inner">
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/icon/19.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5>Career Support</h5>
                        <p>Job Placement Assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-list-inner">
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/icon/20.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5>Cutting-Edge Curriculum</h5>
                        <p>Latest Industry Standards</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-list-inner">
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/icon/21.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5>Community & Networking</h5>
                        <p>Vibrant Learning Community</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- intro end -->*/}

      {/*<!-- about area start -->*/}
      <div className="about-area pd-top-120">
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
                    <Link  className="btn btn-border-black" to="about.php">
                      Read More
                    </Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- about area end -->*/}

      {/*<!-- course area start -->*/}
      <div className="course-area pd-top-110 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6 className="sub-title double-line">OUR COURSES</h6>
                <h2 className="title">Top Featured Courses</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-course-inner style-two">
                <div className="emt-thumb-icon">
                  <img src="assets/img/icon/6.png" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/web2.jpeg" alt="img" />
                </div>
                <div className="details">
                  <div className="emt-course-meta border-0">
                    <div className="row">
                      <div className="col-10">
                        <h6>
                          <Link to="course-details.php">Web Development</Link>
                        </h6>
                      </div>
                      <div className="col-2 text-right">
                        <Link  className="arrow-right" to="course-details.php">
                          <img src="assets/img/icon/5.png" alt="img" />
                        </Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-course-inner style-two">
                <div className="emt-thumb-icon">
                  <img src="assets/img/icon/7.png" alt="img" />
                </div>
                <div className="thumb">
                  <img
                    src="assets/img/Mobile-App-Development0.-fotor-202405289716.png"
                    alt="img"
                  />
                </div>
                <div className="details">
                  <div className="emt-course-meta border-0">
                    <div className="row">
                      <div className="col-10">
                        <h6>
                          <Link to="course-details.php">
                            Mobile App Development
                          </Link>
                        </h6>
                      </div>
                      <div className="col-2 text-right">
                        <Link  className="arrow-right" to="course-details.php">
                          <img src="assets/img/icon/5.png" alt="img" />
                        </Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-course-inner style-two">
                <div className="emt-thumb-icon">
                  <img src="assets/img/icon/8.png" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/java2.jpeg" alt="img" />
                </div>
                <div className="details">
                  <div className="emt-course-meta border-0">
                    <div className="row">
                      <div className="col-10">
                        <h6>
                          <Link to="course-details.php">
                            Mastering Java for Professionals
                          </Link>
                        </h6>
                      </div>
                      <div className="col-2 text-right">
                        <Link  className="arrow-right" to="course-details.php">
                          <img src="assets/img/icon/5.png" alt="img" />
                        </Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-course-inner style-two">
                <div className="emt-thumb-icon">
                  <img src="assets/img/icon/9.png" alt="img" />
                </div>
                <div className="thumb">
                  <img
                    src="assets/img/Data-science-768x432-fotor-2024052891129.png"
                    alt="img"
                  />
                </div>
                <div className="details">
                  <div className="emt-course-meta border-0">
                    <div className="row">
                      <div className="col-10">
                        <h6>
                          <Link to="course-details.php">
                            Data Science Fundamentals
                          </Link>
                        </h6>
                      </div>
                      <div className="col-2 text-right">
                        <Link  className="arrow-right" to="course-details.php">
                          <img src="assets/img/icon/5.png" alt="img" />
                        </Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-course-inner style-two">
                <div className="emt-thumb-icon">
                  <img src="assets/img/icon/10.png" alt="img" />
                </div>
                <div className="thumb">
                  <img
                    src="assets/img/Digital-fotor-2024052891224.png"
                    alt="img"
                  />
                </div>
                <div className="details">
                  <div className="emt-course-meta border-0">
                    <div className="row">
                      <div className="col-10">
                        <h6>
                          <Link to="course-details.php">Digital Marketing</Link>
                        </h6>
                      </div>
                      <div className="col-2 text-right">
                        <Link  className="arrow-right" to="course-details.php">
                          <img src="assets/img/icon/5.png" alt="img" />
                        </Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-course-inner style-two">
                <div className="emt-thumb-icon">
                  <img src="assets/img/icon/11.png" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/AI-fotor-2024052891329.png" alt="img" />
                </div>
                <div className="details">
                  <div className="emt-course-meta border-0">
                    <div className="row">
                      <div className="col-10">
                        <h6>
                          <Link to="course-details.php">
                            Artificial Intelligence
                          </Link>
                        </h6>
                      </div>
                      <div className="col-2 text-right">
                        <Link  className="arrow-right" to="course-details.php">
                          <img src="assets/img/icon/5.png" alt="img" />
                        </Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- course area end -->*/}

      {/*<!-- speciality area start -->*/}
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
      {/*<!-- speciality area end -->*/}

      {/*<!--pricing-area start-->*/}
      <div
        className="pricing-area pd-top-280 pd-bottom-90 text-center"
        style={{ backgroundImage: "url(assets/img/bg/pricing-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-11">
              <div className="section-title">
                <h6 className="sub-title double-line">LET’S WORK</h6>
                <h2 className="title">Pricing Plans</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner-wrap">
                <div className="single-pricing-inner">
                  <h6 className="title">BASIC</h6>
                  <div className="price-area">
                    <span>৳4000 </span>/ month
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa fa-check"></i>Creative Solutions
                    </li>
                    <li>
                      <i className="fa fa-check"></i>One-on-One Coaching
                    </li>
                    <li>
                      <i className="fa fa-check"></i>Web devolopment course
                    </li>
                    <li className="unable">
                      <i className="fa fa-times"></i>Unlimited free revision
                    </li>
                    <li className="unable">
                      <i className="fa fa-times"></i>Lifetime devolopment
                    </li>
                    <li className="unable">
                      <i className="fa fa-times"></i>Lifetime free support
                    </li>
                  </ul>
                  <Link  className="btn btn-base btn-radius w-100" to="#">
                    GET STARTED
                  </Link> 
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner-wrap">
                <div className="single-pricing-inner">
                  <h6 className="title">STANDARD</h6>
                  <div className="price-area">
                    <span>৳8000 </span>/ month
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa fa-check"></i>Creative Solutions
                    </li>
                    <li>
                      <i className="fa fa-check"></i>One-on-One Coaching
                    </li>
                    <li>
                      <i className="fa fa-check"></i>Web devolopment course
                    </li>
                    <li>
                      <i className="fa fa-check"></i>Unlimited free revision
                    </li>
                    <li className="unable">
                      <i className="fa fa-times"></i>Lifetime devolopment
                    </li>
                    <li className="unable">
                      <i className="fa fa-times"></i>Lifetime free support
                    </li>
                  </ul>
                  <Link  className="btn btn-base btn-radius w-100" to="#">
                    GET STARTED
                  </Link> 
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner-wrap">
                <div className="single-pricing-inner">
                  <h6 className="title">PLATINUM</h6>
                  <div className="price-area">
                    <span>৳14000</span>/ month
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa fa-check"></i>Creative Solutions
                    </li>
                    <li>
                      <i className="fa fa-check"></i>One-on-One Coaching
                    </li>
                    <li>
                      <i className="fa fa-check"></i>Web devolopment course
                    </li>
                    <li>
                      <i className="fa fa-check"></i>Unlimited free revision
                    </li>
                    <li>
                      <i className="fa fa-check"></i>Lifetime devolopment
                    </li>
                    <li>
                      <i className="fa fa-check"></i>Lifetime free support
                    </li>
                  </ul>
                  <Link  className="btn btn-base btn-radius w-100" to="#">
                    GET STARTED
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--pricing-area end-->*/}

      {/*<!--client-area start-->*/}
      <div
        className="client-area bg-base pd-top-100 pd-bottom-100"
        style={{ backgroundImage: "url(assets/img/institute/bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="institute-slider owl-carousel">
                <div className="item">
                  <img src="assets/img/institute/1.png" alt="img" />
                </div>
                <div className="item">
                  <img src="assets/img/institute/2.png" alt="img" />
                </div>
                <div className="item">
                  <img src="assets/img/institute/3.png" alt="img" />
                </div>
                <div className="item">
                  <img src="assets/img/institute/4.png" alt="img" />
                </div>
                <div className="item">
                  <img src="assets/img/institute/5.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--client-area end-->*/}

      {/*<!--events-area start-->*/}
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
                        <Link to="blog-details.php">
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
                        <Link to="blog-details.php">
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
                        <Link to="blog-details.php">
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
      {/*<!--events-area end-->*/}
      <div
        className="testimonial-area pd-top-110 pd-bottom-120"
        style={{
          backgroundImage: "url(assets/img/testimonial/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
                  "Incredible course on Data Science Fundamentals! Truly a
                  valuable experience!
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
      {/*<!--blog-area start-->*/}
      <div className="blog-area pd-top-110 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center">
                <h6 className="sub-title double-line">Latest</h6>
                <h2 className="title">Tech Insights & Articles</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/it5.jpeg" alt="img" />
                  <span className="date">23 May, 2024</span>
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      <i className="fa fa-user"></i>TCLK
                    </li>
                    <li>
                      <i className="fa fa-folder-open-o"></i> Artificial
                      intelligence
                    </li>
                  </ul>
                  <h5>
                    <Link to="blog-details.php">
                      Breakthrough AI Algorithm Achieves Human-Level
                      Performance...
                    </Link>
                  </h5>
                  <Link  className="read-more-text" to="blog-details.php">
                    READ MORE <i className="fa fa-angle-right"></i>
                  </Link> 
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/2.jpeg" alt="img" />
                  <span className="date">22 May, 2024</span>
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      <i className="fa fa-user"></i>TCLK
                    </li>
                    <li>
                      <i className="fa fa-folder-open-o"></i>Javascript
                    </li>
                  </ul>
                  <h5>
                    <Link to="blog-details.php">
                      JavaScript Security Vulnerabilities: Mitigating Risks in
                      Modern Web...
                    </Link>
                  </h5>
                  <Link  className="read-more-text" to="blog-details.php">
                    READ MORE <i className="fa fa-angle-right"></i>
                  </Link> 
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/resized-image-Promo2.jpeg" alt="img" />
                  <span className="date">24 May, 2024</span>
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      <i className="fa fa-user"></i>TCLK
                    </li>
                    <li>
                      <i className="fa fa-folder-open-o"></i>Graphics
                    </li>
                  </ul>
                  <h5>
                    <Link to="blog-details.php">
                      Digital Illustration Trends: From NFT Art to
                      Meta-Universe...
                    </Link>
                  </h5>
                  <Link  className="read-more-text" to="blog-details.php">
                    READ MORE <i className="fa fa-angle-right"></i>
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--blog-area end-->*/}
    </>
  );
}
