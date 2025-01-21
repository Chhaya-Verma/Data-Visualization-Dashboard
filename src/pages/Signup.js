import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import the external CSS file

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Check if the email already exists in the mock server (json-server)
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();

      const userExists = data.some((user) => user.email === email);

      if (userExists) {
        setError("You are already signed up. Please log in.");
        return;
      }

      // Simulate adding new user to db.json
      const newUser = { email, password, username };

      const createResponse = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!createResponse.ok) {
        throw new Error("Failed to create account");
      }

      console.log("User registered successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err.message);
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        {/* Image on the left side */}
        <div className="signup-left">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg"
            alt="Signup"
          />
        </div>

        {/* Input fields on the right side */}
        <div className="signup-right">
          <h1>Signup</h1>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input-field"
            />
            <button type="submit" className="signup-button">
              Signup
            </button>
          </form>
          {error && <p className="error-text">{error}</p>}
          <p>
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
