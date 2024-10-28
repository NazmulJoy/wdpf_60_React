import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../AuthContext';

export default function SignIn() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(formData.email)) {
        setError("Please enter a valid email address.");
        return;
    }

    setLoading(true);
    try {
        const response = await axios.post("http://localhost/TCLK/rlogin.php", formData);

        if (response.data.success) {
            const { token, name } = response.data;
            
            localStorage.setItem("token", token);
            localStorage.setItem("username", name);
            
            
            login({ token, name });

            navigate("/");
        } else {
            setError(response.data.error); 
        }
    } catch (error) {
        console.error("Login error:", error.response || error.message); 
        setError("Email or Password is invalid.");
    } finally {
        setLoading(false);
    }
};

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
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
                <li>
                  <Link to="/">Home</Link>
                </li>
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
                    <button
                      type="submit"
                      className="btn btn-base w-100"
                      disabled={loading}
                    >
                      {loading ? "Signing In..." : "Sign In"}
                    </button>
                  </div>
                  <div className="col-12">
                    <p className="text-center">Don’t have an account? <Link to="/signup">Sign Up</Link></p>
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
