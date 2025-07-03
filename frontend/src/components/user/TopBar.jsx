import React from "react";
import '../../styles/TopBar.css'
import { Link } from "react-router-dom";

function TopBar() {
    return (
        <div className="topbar">
            <h1 className="logo">Helpdesk</h1>
            <div className="top-icons">
                <ul>
                    <li><Link to="/userprofile">👤</Link></li>
                    <li>🔔</li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;
