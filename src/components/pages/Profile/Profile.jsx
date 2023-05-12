import React from 'react';
import Navbar from '../../inc/Navbar'

const Profile = () => {
  return (
    <>
    <div className="bg-white h-screen profile">
        <Navbar/>
        <div className=''>
            <div className='bg-white sm:px-6 lg:py-6 lg:px-44 lg:py-44'>
                <div className="flex px-4 sm:px-0 justify-center">
                    <div className="">
                        <img className='rounded-full' style={{objectFit:"cover", marginLeft:"10px", height:"126px", width:"126px"}} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                    </div>
                    <div className="pl-4 pt-7 text-[30px] text-left">
                        <h3 className="font-semibold leading-7 text-gray-900">Welcome</h3>
                        <p className="mt-1 max-w-2xl leading-6 text-gray-500">Mr. John Doe</p>
                    </div>
                </div>
                <div className="text-[17px] mt-6 sm:mx-36 lg:mx-96">
                    <dl className="">
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-medium leading-6 text-gray-900 text-left">Email address</dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">johndoe@example.com</dd>
                        </div>
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-medium leading-6 text-gray-900 text-left">Name</dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">Mr. John Doe</dd>
                        </div>
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-medium leading-6 text-gray-900 text-left">Gender</dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">Male</dd>
                        </div>
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-medium leading-6 text-gray-900 text-left">Date of Birth</dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">31-07-1989</dd>
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
