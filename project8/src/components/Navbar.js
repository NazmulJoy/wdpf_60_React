import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-area">
            {/* Navbar Top Start */}
            <div className="navbar-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 text-md-left text-center">
                            <ul>
                                <li>
                                    <p><i className="fa fa-map-marker"></i> 2072 Pinnickinick Street, WA 98370</p>
                                </li>
                                <li>
                                    <p><i className="fa fa-envelope-o"></i> info@website.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="topbar-right text-md-right text-center">
                                <li className="social-area">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar Start */}
            <nav className="navbar navbar-area-2 navbar-expand-lg">
                <div className="container nav-container">
                    <div className="responsive-mobile-menu">
                        <button className="menu toggle-btn d-block d-lg-none" data-target="#edumint_main_menu"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-left"></span>
                            <span className="icon-right"></span>
                        </button>
                    </div>
                    <div className="logo">
                        <Link to="/"><img src="/assets/img/tclk.jpg" alt="logo" /></Link>
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                        <Link className="signin-btn" to="/signin">Sign In</Link>
                        <Link className="btn btn-base" to="/signup">Sign Up</Link>
                        <Link className="search-bar" to="#"><i className="fa fa-search"></i></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="edumint_main_menu">
                        <ul className="navbar-nav menu-open">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/course">Course</Link></li>
                            <li><Link to="/instructor">Instructor</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="nav-right-part nav-right-part-desktop style-black">
                        <Link className="signin-btn" to="/signin">Sign In</Link>
                        <Link className="btn btn-base" to="/blog">Sign Up</Link>
                        <Link className="search-bar" to="#"><i className="fa fa-search"></i></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
