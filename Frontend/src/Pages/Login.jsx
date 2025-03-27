import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../login.css";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ userName: "", password: "" }); 
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Form submitted, userData:', userData);
  
    try {
      const response = await axios.post('http://localhost:3000/login', userData);
      console.log('Server response:', response.status, response.data);
  
      if (response.status >= 200 && response.status < 300) {
        console.log('Login successful, navigating to /Dashboard');
        localStorage.setItem("userName", JSON.stringify(userData.userName));
        navigate("/Dashboard");
      } else {
        console.log('Unexpected status:', response.status);
        setError(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        if (error.response.status === 401) {
          setError("Incorrect password");
        } else if (error.response.status === 404) {
          setError("User not found");
        } else {
          setError(`Login failed: ${error.response.data.message || "Unknown error"}`);
        }
      } else {
        setError("Server is unreachable. Please try again later.");
      }
    }
  };

  return (
    <div className="LoginContainer">
      <form onSubmit={handleLogin} className="login">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="userName" 
          value={userData.userName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          required
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Login;
