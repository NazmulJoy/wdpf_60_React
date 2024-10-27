import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.cpassword) {
      setError("Passwords do not match");
      return;
    }
    // Add your signup logic here, e.g., API call
    // If successful, navigate to the sign-in page
    navigate("/signin");
  };

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="breadcrumb-area bg-overlay" style={{ backgroundImage: "url('/assets/img/out.jpeg')" }}>
        <div className="container">
          <div className="breadcrumb-inner">
            <div className="section-title mb-0 text-center">
              <h2 className="page-title">Sign Up</h2>
              <ul className="page-list">
                <li><Link to="/">Home</Link></li>
                <li>Sign Up</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="signup-page-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <form className="signin-inner" onSubmit={handleSubmit}>
                <div className="row">
                  {error && (
                    <div className="col-12">
                      <div className="alert alert-danger text-center mb-4" role="alert">
                        {error}
                      </div>
                    </div>
                  )}
                  <div className="col-12">
                    <div className="single-input-inner style-bg-border">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner style-bg-border">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner style-bg-border">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner style-bg-border">
                      <input
                        type="password"
                        name="cpassword"
                        placeholder="Confirm Password"
                        value={formData.cpassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-checkbox-inner">
                      <input type="checkbox" required />
                      By clicking "create account".
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <button type="submit" className="btn btn-base w-100">Create Account</button>
                  </div>
                  <div className="col-12">
                    <span style={{ marginRight: '10px' }}>By creating an account</span>
                    <Link to="/sign-in"><strong>Signin</strong></Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
