import React from 'react';
import Navbar from '../../inc/Navbar'
import { useSelector } from 'react-redux';

const Profile = () => {

  const auth = useSelector((state) => state.auth);
    console.log("From Profile");
    console.log(auth.user);
  return (
    <>
    <div className="bg-white h-screen profile">
        <Navbar user={auth.user}/>
        <div className=''>
            <div className='bg-white sm:px-6 lg:py-6 lg:px-44 lg:py-44'>
                <div className="flex px-4 sm:px-0 justify-center">
                    <div className="">
                        <img className='rounded-full' style={{objectFit:"cover", marginLeft:"10px", height:"126px", width:"126px"}} src={auth.user.patient.profile_image.resource != null ? auth.user.patient.profile_image.resource : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"} alt="" />
                    </div>
                    <div className="pl-4 pt-7 text-[30px] text-left">
                        <h3 className="font-semibold leading-7 text-gray-900">Welcome</h3>
                        <p className="mt-1 max-w-2xl leading-6 text-gray-500">{auth.user != null ? auth.user.name : 'User'}</p>
                    </div>
                </div>
                <div className="text-[17px] mt-6 sm:mx-36 lg:mx-96">
                    <dl className="">
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-medium leading-6 text-gray-900 text-left">Email address</dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">{auth.user.patient.email != null ? auth.user.patient.email : 'Unknown Email'}</dd>
                        </div>
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-medium leading-6 text-gray-900 text-left">Name</dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">{auth.user != null ? auth.user.name : 'User'}</dd>
                        </div>
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-medium leading-6 text-gray-900 text-left">Gender</dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">{auth.user.patient.gender != null ? auth.user.patient.gender : 'Unknown'}</dd>
                        </div>
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-medium leading-6 text-gray-900 text-left">Date of Birth</dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">{auth.user.patient.dob != null ? auth.user.patient.dob : 'Unknown'}</dd>
                        </div>
                    </dl>
                </div>
                </div>
        </div>
        
    </div>
    <div className="w-full bg-white px-3 -mt-12 text-dark text-left lg:px-80 sm:px-24">
        <div className="">
            <ul className='flex pb-3'>
                <div className="flex-auto text-left">
                    <li className=''>Version 1.0</li>
                </div>
                <div className="flex text-right font-bold justify-between">
                    <li className='px-2'>About Us</li>
                    <li className='px-2'>Privacy</li>
                    <li className='px-2'>Terms</li>
                </div>

            </ul>
        </div>
    </div>
    </>    
  )
}

export default Profile
