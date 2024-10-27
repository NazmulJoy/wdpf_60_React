import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your login logic
      const isAuthenticated = formData.email === "test@example.com" && formData.password === "password";

      if (isAuthenticated) {
        navigate("/dashboard"); // Redirect to dashboard or desired page on successful login
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="breadcrumb-area bg-overlay" style={{ backgroundImage: "url('/assets/img/out.jpeg')" }}>
        <div className="container">
          <div className="breadcrumb-inner">
            <div className="section-title mb-0 text-center">
              <h2 className="page-title">Sign In</h2>
              <ul className="page-list">
                <li><Link to="/">Home</Link></li>
                <li>Sign In</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sign In Form */}
      <div className="signin-page-area pd-top-120 pd-bottom-120">
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
                  <div className="col-12 mb-4">
                    <button type="submit" className="btn btn-base w-100">Sign In</button>
                  </div>
                  <div className="col-12">
 
                    <span style={{ marginRight: '10px' }}>Dont have account?</span>
                    <Link to="/sign-up">
                      <strong>Signup</strong>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
