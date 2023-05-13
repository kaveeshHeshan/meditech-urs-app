import { useState, useEffect } from 'react'

import Header from './components/inc/Header';
import './App.css'
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getUser} from './store/Auth';
import Cookies from 'js-cookie';

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const token = Cookies.get('token');
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();

  async function fetchUserData() {
    const res = await fetch('https://mditest.elifeamerica.com/api/v1/auth/user', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

      setIsLoading(false)
      if (res.ok) {
        const user = await res.json()
        dispatch(getUser(user))
      }
  }

  // useEffect(() => {
  //   fetchUserData();
  // }, [])

  useEffect(() => {
    fetchUserData()
  }, [])

  if (isLoading) {
    return <p>Loading ...</p>
  }
  return (
    <>
      <div>
        {/* <Header/> */}
        <Outlet />
      </div>
      
    </>
  )
}

export default App
