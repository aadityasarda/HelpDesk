import React from "react";
import StatCard from "../components/user/StatCard";
import "../styles/Dashboard.css";

function UserDashboard() {
  return (
    <div className="user-dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="stat-cards">
        <StatCard title="Total Tickets" count={12} background="#2979FF" />
        <StatCard title="Total Solved" count={8} background="#00E676" />
        <StatCard title="Total Awaiting Approval" count={2} background="#FF5252" />
        <StatCard title="Total in Progress" count={2} background="#FFEB3B" />
      </div>
    </div>
  );
}

export default UserDashboard;
