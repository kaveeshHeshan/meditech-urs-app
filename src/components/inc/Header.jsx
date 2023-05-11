import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components Imports
import Login from '../Login';
import Register from '../Register';
import Profile from '../Profile';
import ProfileUpdate from '../ProfileUpdate';
import Error404Page from '../pages/Errors/Error404Page'

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
                <Route path='*' element={<Error404Page/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default Header
