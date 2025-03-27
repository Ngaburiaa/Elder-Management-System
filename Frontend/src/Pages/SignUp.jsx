import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "../signUp.css";
Modal.setAppElement("#root");
import {Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 

  const [userData, setUserData] = useState({
    fullName: "",
    userName: "",
    Age: "",
    gender: "",
    email: "",
    confirmPassword: "",
    password: "",
    phone: "",
    healthStatus: "",
    physicianInfo: "",
    insuranceDetails: "",
    contactName: "",
    relationship: "",
    contactPhone: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      !userData.fullName ||
      !userData.userName ||
      !userData.Age ||
      !userData.email ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      return alert("All required fields must be filled out.");
    }

    // Check username availability
    if (userData.userName) {
      try {
        const response = await axios.get("http://localhost:3000/user");
        const userExists = response.data.some(
          (user) => user.userName === userData.userName
        );
        if (userExists) return setUserNameError("Username already exists!");
        else {
          setUserNameError("");
        }
      } catch (error) {
        alert("Error checking username. Please try again.");
        return;
      }
    }

    // Check email availability
    if (userData.email) {
      try {
        const response = await axios.get("http://localhost:3000/user");
        const emailExists = response.data.some(
          (user) => user.email === userData.email
        );
        if (emailExists) return setEmailError("Email already exists!");
        else {
          setEmailError("");
        }
      } catch (error) {
        alert("Error checking email. Please try again.");
        return;
      }
    }

    // Password validation

    if (userData.password !== userData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setModalIsOpen(true); // This triggers the modal
        // Reset form data
        setUserData({
          fullName: "",
          userName: "",
          Age: "",
          gender: "",
          email: "",
          confirmPassword: "",
          password: "",
          phone: "",
          healthStatus: "",
          physicianInfo: "",
          insuranceDetails: "",
          contactName: "",
          relationship: "",
          contactPhone: "",
        });
      }
      localStorage.setItem("userName", JSON.stringify(userData.userName));
      navigate("/Dashboard");
    } catch (error) {
      alert("An error occurred while registering. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: name === "Age" ? parseInt(value, 10) || "" : value,
    }));

    if (name === "UserName") {
      setUserNameError("");
    }
    if (name === "Email") {
      setEmailError("");
    }
  };

  return (
    <div className="signup-container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>🎉 Registration Successful!</h2>
        <p>Your account has been created successfully.</p>
        <button onClick={() => setModalIsOpen(false)}>OK</button>
      </Modal>

      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="section-card">
          <h2>Personal Information</h2>
          <div className="form-group">
            <label htmlFor="FullName">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Age">Age</label>
            <input
              type="number"
              name="Age"
              value={userData.Age}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              {["male", "female", "other"].map((gender) => (
                <label key={gender}>
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={userData.gender === gender}
                    onChange={handleInputChange}
                  />
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="section-card">
          <h2>Contact Information</h2>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="Phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              placeholder="Enter phone Number"
              required
            />
          </div>
        </div>

        {/* Account Credentials Section */}
        <div className="section-card">
          <h2>Account Credentials</h2>
          <div className="form-group">
            <label htmlFor="UserName">Username</label>
            <input
              type="text"
              placeholder="Dennis"
              name="userName"
              value={userData.userName}
              onChange={handleInputChange}
              required
            />
            {userNameError && (
              <div className="error-message">{userNameError}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

                
       
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleInputChange}
                required
              />
                <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
        

            </div>
           
          </div>
        </div>

        {/* Health & Care Information Section */}
        <div className="section-card health-section">
          <h2>Health & Care Information</h2>
          <div className="form-group">
            <label htmlFor="physicianInfo">
              Primary Physician or Caregiver:
            </label>
            <input
              type="text"
              name="physicianInfo"
              value={userData.physicianInfo}
              onChange={handleInputChange}
              placeholder="Enter name and contact details"
            />
          </div>

          <div className="form-group">
            <label htmlFor="healthStatus">Current Health Status:</label>
            <textarea
              name="healthStatus"
              placeholder="Enter details about chronic conditions, mobility issues, etc."
              rows="4"
              value={userData.healthStatus}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="insuranceDetails">
              Insurance Details (Optional):
            </label>
            <input
              type="text"
              name="insuranceDetails"
              value={userData.insuranceDetails}
              onChange={handleInputChange}
              placeholder="Enter insurance provider and policy number"
            />
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="section-card emergency-section">
          <h2>Emergency Contact Details</h2>
          <div className="form-group">
            <label htmlFor="contactName">Contact Name:</label>
            <input
              type="text"
              name="contactName"
              value={userData.contactName}
              onChange={handleInputChange}
              placeholder="Enter contact name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="relationship">Relationship:</label>
            <input
              type="text"
              name="relationship"
              value={userData.relationship}
              onChange={handleInputChange}
              placeholder="e.g., Spouse, Child"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactPhone">Phone Number:</label>
            <input
              type="tel"
              name="contactPhone"
              value={userData.contactPhone}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            I agree to the <a href="#">Terms and Conditions</a>
          </label>
        </div>
           <button  type="submit" className="submit-btn" disabled={!termsAccepted}>
          Create Account
        </button>
      </form>
      <p>
        Already have an account? <Link to="/Login">Login</Link>
      </p>
    </div>
  );
}

export default SignUp;
