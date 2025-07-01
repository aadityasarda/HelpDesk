import React from "react";
import '../styles/StatCard.css'

function StatCard({ title, count, background }){
    return(
        <div className="stat-card" style={{ backgroundColor: background }}>
            <h4>{title}</h4>
            <p>{count}</p>
        </div>
    );
}

export default StatCard;