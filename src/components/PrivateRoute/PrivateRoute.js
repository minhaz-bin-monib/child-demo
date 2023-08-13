import React, { useContext } from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const {user} = useContext(AuthContext);
    if (user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;