import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignInPage.css";
import useSignInForm from "../hooks/useSignInForm";

function SignInPage() {
    const { formData, handleChange, handleSubmit } = useSignInForm();

    return (
        <div className="signin-container">
            <div className="signin-card">
                <h2 className="title">Helpdesk System</h2>

                <form className="signin-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Sign In</button>
                </form>

                <div className="signin-links">
                    <a href="/forgotpassword" className="forget">Forget Password</a>
                    <Link to="/signup" className="signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
