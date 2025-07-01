import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layouts/AppLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInPage/>
    },
    {
        path: "/signin",
        element: <SignInPage/>
    },
    {
        path: '/signup',
        element: <SignUpPage />
    },
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
        ]
    }
])

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
