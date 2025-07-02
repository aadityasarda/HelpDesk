import React from "react";
import '../../styles/SideBar.css'
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="sidebar">
            <h2>HelpDesk</h2>
            <nav>
                <ul>
                    <li><Link to="/dashboard">📊 Dashboard</Link></li>
                    <li><Link to="/new-ticket">🎫 New Ticket</Link></li>
                    <li><Link to="/my-tickets">📁 My Ticket</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;