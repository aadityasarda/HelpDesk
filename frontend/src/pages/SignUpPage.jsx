import React from "react";
import '../styles/SignUpPage.css'
import { Link } from "react-router-dom";

function SignUpPage() {
    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="title">Helpdesk System</h2>
                <p className="subtitle">Sign up here</p>

                <form className="signup-form">
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <input type="email" placeholder="Email" required />

                    <button type="submit">Sign Up</button>
                </form>

                <div className="signup-links">
                    <a href="#" className="forgot">Forgot password</a>
                    <Link to="/signin" className="signin">Sign In</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage