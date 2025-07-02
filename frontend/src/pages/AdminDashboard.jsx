import React from "react";
import AdminStatCard from "../components/admin/AdminStatCard";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Tickets", count: 12, background: "#2D74DA" },
    { title: "Total Solved", count: 8, background: "#00DB5F" },
    { title: "Total Awaiting Approval", count: 2, background: "#F24040" },
    { title: "Total in Progress", count: 2, background: "#F9DF3F" },
  ];

  return (
    <div className="admin-dashboard">
      {/* Stat Cards Row */}
      <div className="admin-stat-grid">
        {stats.map((stat, index) => (
          <AdminStatCard key={index} {...stat} />
        ))}
      </div>

      {/* Chart + Team Summary + Feedback */}
      <div className="admin-bottom-grid">
        {/* Chart Block */}
        <div className="admin-box chart-block">
          <h3>📊 Chart</h3>
          <div className="chart-placeholder">[ Graph Placeholder ]</div>
        </div>

        {/* Team + Feedback Block */}
        <div className="admin-box side-block">
          <div className="team-summary">
            <h3>👥 Team Summary</h3>
            <p>🎧 Technical Supports: <strong>3</strong></p>
            <p>🧑‍💼 Operations Team: <strong>4</strong></p>
          </div>

          <div className="feedback-summary">
            <h3>⭐ Customer Feedback</h3>
            <p className="star-rating">⭐⭐⭐⭐☆</p>
            <p>Average Rating: <strong>4.2</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
