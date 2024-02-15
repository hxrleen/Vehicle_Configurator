import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let demo = JSON.stringify(formData);
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: demo,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          alert("Successfully logged in");
          navigate("/welcome");
        } else {
          alert("Invalid user");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <div className="feedback-container">
      <div className="image-container">
        <img
          src="https://peddleup.com/assets/images/bg-login.png" // Replace with the actual path to your image
          alt="Feedback Image"
          className="feedback-image"
        />
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChange} />
          <br />
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} />
          <br />
          <br />
          <button type="submit">Login</button>
          <br></br>
          <Link to="/">Back to Home</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
