import { createBrowserRouter, Navigate  } from "react-router-dom"
import App from "./App";
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Profile from './components/pages/Profile/Profile';
import ProfileUpdate from './components/pages/Profile/ProfileUpdate';
import Error404Page from './components/pages/Errors/Error404Page';
import SuccessMessage from './components/pages/Messages/Success';
import Cookies from "js-cookie";
import CheckAuth from "./utils/CheckAuth";
import CheckGuest from "./utils/CheckGuest";


export default createBrowserRouter([

    {
        element: <App/>,
        children: [
            {
                path: '/',
                element: <CheckGuest><Login /></CheckGuest>,
            },
            {
                path: '/login',
                element: <CheckGuest><Login /></CheckGuest>,
            },
            {
                path: '/register',
                element: <CheckGuest><Register /></CheckGuest>,
            },
            {
                path: '/profile',
                element: <CheckAuth><Profile/></CheckAuth>,
            },
            {
                path: '/profile/update',
                element: <CheckAuth><ProfileUpdate /></CheckAuth>,
            },
            {
                path: '/success',
                element: <SuccessMessage />,
            },
            {
                path: '*',
                element: <Error404Page />,
            },
        ]
    }
])
