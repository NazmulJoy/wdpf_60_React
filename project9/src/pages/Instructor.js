import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
    if (window.$ && window.$(".owl-carousel").owlCarousel) {
      window.$(".testimonial-slider-2").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        responsive: {
          0: { items: 1 },      
          600: { items: 2 },   
          1000: { items: 3 },   
        },
      });
    }
  }, []);
  function getUsers() {
    axios.get('http://localhost/TCLK/rteam.php').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}
  return (
    <>
      {/* breadcrumb start */}
      <div
        className="breadcrumb-area bg-overlay"
        style={{ backgroundImage: "url('assets/img/out.jpeg')" }}
      >
        <div className="container">
          <div className="breadcrumb-inner">
            <div className="section-title mb-0 text-center">
              <h2 className="page-title">Instructor</h2>
              <ul className="page-list">
                <li>
                  <Link to="index.php">Home</Link>
                </li>
                <li>Instructor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb end */}

      {/* team area start */}
      <div className="team-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
          {users.map((user, key) =>
            <div className="col-lg-4 col-md-6" key={key}>
              <div className="single-team-inner">
                <div className="thumb">
                <img src={`assets/img/${user.image}`} alt="img" />
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
                    <Link to="#">{user.name}</Link>
                  </h4>
                  <span>{user.subject}</span>
                </div>
              </div>
            </div>
            )}
            
          </div>
        </div>
        {/* team area end */}

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
      </div>
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
                  <img src="assets/img/1s-fotor-2024052893658.png" alt="img" />
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
                valuable and great experience anyone can have! 
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
    </>
  );
}
