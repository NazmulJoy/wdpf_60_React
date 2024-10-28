import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../AuthContext'; // Adjust the path as necessary

export default function Course() {
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { userId, username } = useAuth(); // Get user ID and username from Auth context

  useEffect(() => {
    getUsers();
  }, []);

  // Fetch courses from the backend
  function getUsers() {
    axios.get('http://localhost/TCLK/rcourses.php')
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => console.error("Error fetching users:", error)); // Handle fetch errors
  }

  // Open the modal with the selected course
  const openModal = (user) => {
    setSelectedCourse(user);
    setModalVisible(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedCourse(null);
  };

  // Handle payment submission
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('student_id', userId); // Add student ID
    formData.append('student_name', username); // Use the correct variable name
    formData.append('course_id', selectedCourse.id); // Add course ID
    formData.append('apply_date', new Date().toISOString()); // Set apply date
    formData.append('status', 'pending'); // Set initial status
    formData.append('transaction_id', formData.get('transaction_id')); // Get transaction ID
    formData.append('payment_method', formData.get('payment_method')); // Get payment method

    try {
      const response = await axios.post('http://localhost/TCLK/submit_application.php', formData);
      console.log(response.data); // Handle success response
      closeModal(); // Close modal on success
    } catch (error) {
      console.error("Error submitting application:", error);
      // Handle error (optional: set error state to display to the user)
    }
  };

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
                {users.map((user, key) => (
                  <div className="col-md-6" key={key}>
                    <div className="single-course-inner">
                      <div className="thumb">
                        <img src={`assets/img/${user.image}`} alt="img" />
                      </div>
                      <div className="details">
                        <div className="details-inner">
                          <h6>
                            <Link to="course-details.php">{user.title}</Link>
                          </h6>
                        </div>
                        <div className="emt-course-meta">
                          <div className="row">
                            <div className="col-6">
                              <div className="rating">
                                <i className="fa fa-star"></i> {user.rating}
                                <span>({user.total_reviews})</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="price text-right">
                                Price: <span><b>৳</b>{user.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-success" onClick={() => openModal(user)}>
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Modal for Payment Information */}
                {modalVisible && selectedCourse && (
                  <div id="paymentModal" className="modal" style={{ display: "block" }}>
                    <div className="modal-content">
                      <span className="close" onClick={closeModal}>&times;</span>
                      <h3>Payment Information</h3>
                      <p><strong>Course:</strong> <span>{selectedCourse.title}</span></p>
                      <p><strong>Fee:</strong> ৳<span>{selectedCourse.price}</span></p>

                      <form onSubmit={handlePaymentSubmit}>
                        <input type="hidden" name="course_id" value={selectedCourse.id} />
                        <div className="form-group">
                          <label htmlFor="payment_method">Select Payment Method:</label>
                          <select name="payment_method" id="payment_method" className="form-control" required>
                            <option value="">Choose a payment option</option>
                            <option value="Nagad">Nagad &emsp; 0194554121</option>
                            <option value="Bkash">Bkash &emsp; 0174324325</option>
                            <option value="Rocket">Rocket &emsp; 0164512396</option>
                            <option value="DBBL">Dutch Bangla Bank &emsp; 290424399</option>
                            <option value="Islami Bank">Islami Bank &emsp; 443042201</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="transaction_id">Transaction ID:</label>
                          <input type="text" name="transaction_id" id="transaction_id" className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Payment</button>
                      </form>
                    </div>
                  </div>
                )}
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
                  <h4 className="widget-title">Category</h4>
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
