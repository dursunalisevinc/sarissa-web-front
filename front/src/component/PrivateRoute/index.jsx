// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ allowedRoles }) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    console.log({ role, allowedRoles });

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/unauthorized" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
