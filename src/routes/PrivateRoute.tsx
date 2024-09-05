import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FaSpinner } from 'react-icons/fa';

interface PrivateRouteProps {
    children: React.ReactNode;
    redirectTo?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    children,
    redirectTo = '/login'
}) => {
    const { currentUser, loading } = useAuth();

    console.log(currentUser)
    const location = useLocation();

    if (loading) {

        return <div className="flex justify-center items-center h-full"><FaSpinner className="animate-spin text-pink text-4xl" /></div>;
    }

    if (!currentUser) {
        // Redirect to login page, but save the current location
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;