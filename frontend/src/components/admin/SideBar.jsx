import React from "react";
import { Link } from "react-router-dom";
import "../../styles/SideBar.css";

function SideBar() {
    return (
        <div className="sidebar">
            <h2>Admin Panel</h2>
            <nav>
                <ul>
                    <li><Link to="/dashboard/admin">📊 Dashboard</Link></li>
                    <li><Link to="/admin/manage-users">👥 Manage Users</Link></li>
                    <li><Link to="/admin/reports">📁 Reports</Link></li>
                    <li><Link to="/admin/settings">⚙️ Settings</Link></li>
                    <li><Link to="/userprofile">👤 Profile</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;
