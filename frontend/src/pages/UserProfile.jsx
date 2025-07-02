import React from "react";
import '../styles/UserProfile.css'
import useFeedbackForm from "../hooks/feedbackForm";

function UserProfile() {
    const {feedback, rating, setFeedback, handleStarClick, handleSubmit} = useFeedbackForm();
    return (
        <div className="profile-container">
            <h2>User Profile</h2>

            <div className="profile-sections">
                {/* Left Card */}
                <div className="profile-card">
                    <div className="profile-avatar">👤</div>
                    <div className="profile-details">
                        <p>Username</p>
                        <p>Contact Number</p>
                        <p>Email</p>
                        <p>Department</p>
                    </div>
                </div>

                {/* Right Card */}
                <form className="feedback-card" onSubmit={handleSubmit}>
                    <label>Give Your Feedback</label>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="[Lorem Ipsum]"
                        rows="3"
                    />

                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => handleStarClick(star)}
                                className={star <= rating ? 'filled' : ''}
                            >
                                ★
                            </span>
                        ))}
                    </div>

                    <button type="submit">Submit Feedback</button>
                </form>
            </div>
        </div>
    );
}

export default UserProfile;