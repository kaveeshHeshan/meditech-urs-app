import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

const CheckAuth = ({children}) => {

    const auth = useSelector((state) => state.auth);
    return auth.isAuthenticated ? children : <Navigate to='/login' />
}

export default CheckAuth
