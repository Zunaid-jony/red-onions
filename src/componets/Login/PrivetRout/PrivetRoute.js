import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';


const PrivetRoute = ({ children, ...rest}) => {
    const {user} = useAuth();
    return  user.email ? children : <Navigate to="/login"></Navigate>}
        
        
      


export default PrivetRoute;