import React from "react";
import SideBar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import '../styles/AppLayout.css'

function AppLayout(){
    return (
        <div className="layout">
            <SideBar/>
            <div className="main-area">
                <TopBar/>
                <div className="page-content">
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default AppLayout