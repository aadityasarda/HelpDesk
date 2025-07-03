import React, { useState } from "react";
import '../../styles/AdminSideBar.css';
import { Link } from "react-router-dom";

function SideBar() {
    const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);

    const toggleDatabase = () => {
        setIsDatabaseOpen(prev => !prev);
    };

    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li><Link to="/admin/dashboard">📊 Dashboard</Link></li>

                    <li className="collapsible" onClick={toggleDatabase}>
                        📁 Database {isDatabaseOpen ? "▲" : "▼"}
                    </li>
                    {isDatabaseOpen && (
                        <ul className="submenu">
                            <li><Link to="/admin/database/user">👤 User</Link></li>
                            <li><Link to="/admin/database/operation">🛠 Operation Team</Link></li>
                            <li><Link to="/admin/database/technical">🎧 Technical Support</Link></li>
                        </ul>
                    )}

                    <li><Link to="/admin/settings">⚙️ Setting</Link></li>
                    <li><Link to="/admin/userlog">📜 User Log History</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;
