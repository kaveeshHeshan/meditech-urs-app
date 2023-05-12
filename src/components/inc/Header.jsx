import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components Imports
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Profile from '../pages/Profile/Profile';
import ProfileUpdate from '../pages/Profile/ProfileUpdate';
import Error404Page from '../pages/Errors/Error404Page';
import SuccessMessage from '../pages/Messages/Success';

const Header = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path='/home' element={<Profile/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/profile/update' element={<ProfileUpdate/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/success' element={<SuccessMessage/>}/>
                <Route path='*' element={<Error404Page/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default Header
