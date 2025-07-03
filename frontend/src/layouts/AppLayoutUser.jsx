import React from "react";
import SideBar from "../components/user/Sidebar";
import TopBar from "../components/user/TopBar";
import Footer from "../components/user/Footer";
import { Outlet } from "react-router-dom";
import '../styles/AppLayout.css'

function AppLayout() {
    return (
        <div className="app-container">
            <TopBar />
            <div className="layout">
                <SideBar />
                <div className="main-area">
                    <div className="page-content">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default AppLayout