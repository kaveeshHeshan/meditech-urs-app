import Cookies from 'js-cookie';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CheckGuest = ({children}) => {
    const auth = useSelector((state) => state.auth);
    return !auth.isAuthenticated ? children : <Navigate to='/profile' replace={true} />
}

export default CheckGuest