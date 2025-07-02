import React from "react";
import '../../styles/TopBar.css'
import { Link } from "react-router-dom";

function TopBar() {
    return (
        <div className="topbar">
            <span>Dashboard</span>
            <div className="top-icons">
                <ul>
                    <li><Link to="/userprofile">👤</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;