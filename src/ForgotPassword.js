import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    // Here you would typically make a request to the backend to send a reset link to the user's email
    try {
      // Example: send reset password email (You should implement server-side functionality)
      const response = await fetch("http://localhost:5000/reset-password", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" }
      });

      if (response.ok) {
        setMessage("Password reset email sent successfully!");
        setError("");
      } else {
        throw new Error("Email not found or other error");
      }
    } catch (err) {
      setMessage("");
      setError("Failed to send password reset email.");
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h1>Forgot Password</h1>
        <form onSubmit={handlePasswordReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="reset-button">
            Send Reset Link
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <p>
          Remember your password?{" "}
          <span
            className="login-link"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
