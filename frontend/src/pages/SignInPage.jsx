import React from "react";
import { Link } from "react-router-dom";
import '../styles/SignInPage.css'

function SignInPage(){
    return(
        <div className="signin-container">
            <div className="signin-card">
                <h2 className="title">Helpdesk System</h2>

                <form className="signin-form">
                    <input type="text" placeholder="Username" required/>
                    <input type="password" placeholder="Enter your username" required/>

                    <button type="submit">Sign In</button>
                </form>
                <div className="signin-links">
                    <a href="#" className="forget">Forget Password</a>
                    <Link to="/signup" className="signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;