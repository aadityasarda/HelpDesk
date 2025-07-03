import React from "react";
import "../styles/SignUpPage.css";
import { Link } from "react-router-dom";
import useSignUpForm from "../hooks/useSignUpForm";

function SignUpPage() {
    const { formData, handleChange, handleSubmit } = useSignUpForm();

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="title">Helpdesk System</h2>
                <p className="subtitle">Sign up here</p>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <button type="submit">Sign Up</button>
                </form>

                <div className="signup-links">
                    <a href="/forgotpassword" className="forgot">Forgot password</a>
                    <Link to="/signin" className="signin">Sign In</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
