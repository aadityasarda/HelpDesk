import React, { useState } from "react";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
  };

  return (
    <div className="forgot-page">
      <div className="forgot-box">
        <p className="forgot-instruction">
          Don’t worry, Enter your email below and we will send you a link to change password.
        </p>
        <form onSubmit={handleSubmit} className="forgot-form">
          <input
            type="email"
            placeholder="Email"
            className="forgot-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="forgot-btn submit-btn">Submit</button>
          <button
            type="button"
            className="forgot-btn signin-btn"
            onClick={() => (window.location.href = "/signin")}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
