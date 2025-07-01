import React from "react";
import '../styles/TopBar.css'

function TopBar() {
    return (
        <div className="topbar">
            <span>Dashboard</span>
            <div className="top-icons">
                🔔 👤 ⏻
            </div>
        </div>
    );
}

export default TopBar;