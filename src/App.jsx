import { useState, useEffect } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getUser} from './store/Auth';
import Cookies from 'js-cookie';

function App() {
  const [isLoading, setIsLoading] = useState(true)

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

  useEffect(() => {
    fetchUserData()
  }, [])

  if (isLoading) {
    return <svg className='animate-spin h-5 w-5 mr-3 ...' viewBox='0 0 24 24'></svg>;
  }
  return (
    <>
      <div>
        <Outlet />
      </div>
      
    </>
  )
}

export default App
