import React from "react";
import '../styles/Dashboard.css'
import StatCard from "../components/user/StatCard";

function Dashboard() {
    return ( 
        <div className="cards-container">
            <StatCard title="Total Tickets" count="12" background="#2979FF" />
            <StatCard title="Total Solved" count="8" background="#00E676" />
            <StatCard title="Total Awaiting Approval" count="2" background="#FF5252" />
            <StatCard title="Total in Progress" count="2" background="#FFEB3B" />
        </div>  
    );
}

export default Dashboard;