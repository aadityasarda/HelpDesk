import React from "react";
import '../styles/SideBar.css'
import { Link } from "react-router-dom";

function SideBar(){
    return (
        <div className="sidebar">
            <h2>HelpDesk</h2>
            <nav>
                <ul>
                    <li><link to="/dashboard" />Dashboard</li>
                    <li><link to="/dashboard" />New Ticket</li>
                    <li><link to="/dashboard" />My Tickets</li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;