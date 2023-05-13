import {React, Fragment} from 'react'
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../store/Auth'

const Navbar = (props) => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showDropDownMenu = (ev) => {
      ev.preventDefault();
    console.log("Clicked");
    let dropdownContent = document.querySelector(".dropdown-content");
      dropdownContent.classList.toggle("active");

  }

  function _logout() {
    Cookies.remove("token");
    dispatch(logout())
    navigate('/login')
  }

  return (
    <>
    <div className="bg-gray-400 mb-12 py-4 px-5">
        <ul className='flex justify-between'>
            <li className='company-logo-name'>ABC COMPANY</li>
            <li className='text-[20px] flex font-bold text-gray-300 items-center'>{props.user != null ? props.user.name : 'User'} {' '}
            <img className='rounded-full' onClick={showDropDownMenu} style={{objectFit:"cover", marginLeft:"10px", height:"50px", width:"50px", cursor:"pointer"}} src={auth.user.patient.profile_image.resource != null ? auth.user.patient.profile_image.resource : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"} alt="" />
              <div className="dropdown-content" style={{right:"0"}}>
                  <div className="divide-y-2 divide-grey-900">
                      <div className="user-link">
                          <Link to="/profile/update">
                              <i className='bx bxs-user'></i> &nbsp; Edit Profile
                          </Link>
                      </div>
                      <div className="user-link">
                          <button type='button' onClick={_logout}>
                              <i className='bx bx-log-out-circle'></i> &nbsp; Logout
                          </button>
                      </div>
                  </div>
              </div>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Navbar