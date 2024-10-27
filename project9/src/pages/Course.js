import React from "react";
import { Link } from "react-router-dom";

export default function Course() {
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
              <h2 className="page-title">Courses</h2>
              <ul className="page-list">
                <li>
                  <Link to="index.php">Home</Link>
                </li>
                <li>Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb end */}

      {/* blog area start */}
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="assets/img/web2.jpeg" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user"></div>
                        <h6>
                          <Link to="course-details.php">Web Development</Link>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star"></i> 4.3
                              <span>(23)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>৳6400.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img
                        src="assets/img/Mobile-App-Development0.-fotor-202405289716.png"
                        alt="img"
                      />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user"></div>
                        <h6>
                          <Link to="course-details.php">
                            Mobile App Development
                          </Link>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star"></i> 4.3
                              <span>(23)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>৳5400.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="assets/img/java2.jpeg" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user"></div>
                        <h6>
                          <Link to="course-details.php">
                            Mastering Java for Professionals
                          </Link>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star"></i> 4.9
                              <span>(73)</span>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="price text-right">
                              Price: <span>৳7400.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img
                        src="assets/img/Data-science-768x432-fotor-2024052891129.png"
                        alt="img"
                      />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user"></div>
                        <h6>
                          <Link to="course-details.php">
                            Data Science Fundamentals
                          </Link>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star"></i> 4.8
                              <span>(53)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>৳6400.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img
                        src="assets/img/Digital-fotor-2024052891224.png"
                        alt="img"
                      />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user"></div>
                        <h6>
                          <Link to="course-details.php">Digital Marketing</Link>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star"></i> 4.5
                              <span>(21)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>৳3400.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img
                        src="assets/img/AI-fotor-2024052891329.png"
                        alt="img"
                      />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user"></div>
                        <h6>
                          <Link to="course-details.php">
                            Artificial Intelligence
                          </Link>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star"></i> 4.4
                              <span>(20)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>৳5400.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="assets/img/Promo2.jpeg" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user"></div>
                        <h6>
                          <Link to="course-details.php">
                            Cloud Computing Essentials
                          </Link>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star"></i> 4.3
                              <span>(23)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>৳5400.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="assets/img/Promo.jpeg" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user"></div>
                        <h6>
                          <Link to="course-details.php">
                            Cybersecurity Fundamentals
                          </Link>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star"></i> 4.9
                              <span>(73)</span>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="price text-right">
                              Price: <span>৳5400.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="td-page-navigation">
                <ul className="pagination">
                  <li className="pagination-arrow">
                    <Link to="#">
                      <i className="fa fa-angle-double-left"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">1</Link>
                  </li>
                  <li>
                    <Link className="active" to="#">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="#">...</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li className="pagination-arrow">
                    <Link to="#">
                      <i className="fa fa-angle-double-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4 order-lg-1 col-12">
              <div className="td-sidebar mt-5 mt-lg-0">
                <div className="widget widget_search_course">
                  <h4 className="widget-title">Search</h4>
                  <form className="search-form single-input-inner">
                    <input type="text" placeholder="Search here" />
                    <button className="btn btn-base w-100 mt-3" type="submit">
                      <i className="fa fa-search"></i> SEARCH
                    </button>
                  </form>
                </div>
                <div className="widget widget_catagory">
                  <h4 className="widget-title">Catagory</h4>
                  <ul className="catagory-items">
                    <li>
                      <Link to="#">
                        Cybersecurity <i className="fa fa-caret-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Development<i className="fa fa-caret-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Data <i className="fa fa-caret-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Design <i className="fa fa-caret-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_checkbox_list">
                  <h4 className="widget-title">Price</h4>
                  <label className="single-checkbox">
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                    Free Courses
                  </label>
                  <label className="single-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Paid Courses
                  </label>
                  <label className="single-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Only Subscription
                  </label>
                </div>
                <div className="widget widget_checkbox_list">
                  <h4 className="widget-title">Level</h4>
                  <label className="single-checkbox">
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                    Beginner
                  </label>
                  <label className="single-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Intermediate
                  </label>
                  <label className="single-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Advanced
                  </label>
                </div>
                <div className="widget widget_tags mb-0">
                  <h4 className="widget-title">Tags</h4>
                  <div className="tagcloud">
                    <Link to="#">Art</Link>
                    <Link to="#">Creative</Link>
                    <Link to="#">Article</Link>
                    <Link to="#">Designer</Link>
                    <Link to="#">Portfolio</Link>
                    <Link to="#">Project</Link>
                    <Link to="#">Personal</Link>
                    <Link to="#">Landing</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog area end */}
    </>
  );
}
