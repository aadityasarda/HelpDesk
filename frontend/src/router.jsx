import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layouts/AppLayoutUser";
import NewTicket from "./pages/NewTicket";
import MyTickets from "./pages/MyTickets";
import UserProfile from "./pages/UserProfile";
import TicketDetails from "./pages/TicketDetails";
import AdminLayout from "./layouts/AppLayoutAdmin";
import AdminDashboard from "./pages/AdminDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInPage />
    },
    {
        path: "/signin",
        element: <SignInPage />
    },
    {
        path: '/signup',
        element: <SignUpPage />
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/new-ticket",
                element: <NewTicket />
            },
            {
                path: "/my-tickets",
                element: <MyTickets />
            },
            {
                path: "/userprofile",
                element: <UserProfile />
            },
            {
                path: "my-ticket",
                element: <MyTickets />
            },
            {
                path: "ticket/:id",
                element: <TicketDetails />
            }
        ]
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/dashboard/admin",
                element: <AdminDashboard />,
            }
        ],
    },
])

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
