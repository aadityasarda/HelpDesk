import React from "react";
import "../../styles/AdminStatCard.css";

function AdminStatCard({ title, count, background }) {
  return (
    <div className="admin-stat-card" style={{ backgroundColor: background }}>
      <h3 className="admin-stat-title">{title}</h3>
      <p className="admin-stat-count">{count}</p>
    </div>
  );
}

export default AdminStatCard;
