import React from 'react';
import Navbar from './inc/Navbar'

const ProfileUpdate = () => {
  return (
    <>
    <div className="bg-white h-screen profile">
        <Navbar/>
        <div className='profile-update'>
            <div className="text-center text-3xl">Edit Profile</div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <form className="space-y-4 w-full" action="#" method="POST" >
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="text-[17px] text-left block font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="second-name" className="text-[17px] text-left block font-medium leading-6 text-gray-900">
                                Second name
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="second-name"
                                id="second-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                    <label htmlFor="email" className="text-[17px] block text-left font-medium leading-6 text-gray-900">
                        Email Address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="dob" className="text-[17px] block text-left font-medium leading-6 text-gray-900">
                        Date of Birth
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="dob"
                        name="dob"
                        type="date"
                        autoComplete="current-dob"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="gender" className="text-[17px] block text-left font-medium leading-6 text-gray-900">
                        Gender
                        </label>
                    </div>
                    <div className="mt-2">
                        <div className="flex radio-inputs">
                            <div className="input-container">
                                <input
                                    id="gender-male"
                                    name="gender"
                                    type="radio"
                                    autoComplete="gender"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="radio-title">
                                    <label htmlFor="gender-male">Male</label>
                                </div>
                            </div>
                            <div className="input-container">
                                <input
                                    id="gender-female"
                                    name="gender"
                                    type="radio"
                                    autoComplete="gender"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="radio-title">
                                    <label htmlFor="gender-female">Female</label>
                                </div>
                            </div>
                            <div className="input-container">
                                <input
                                    id="gender-other"
                                    name="gender"
                                    type="radio"
                                    autoComplete="gender"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="radio-title">
                                    <label htmlFor="gender-other">Other</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='pt-6'>
                    <button
                        type="submit"
                        className="text-[17px] profile-update-submit-btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Update Profile details
                    </button>
                    </div>
                </form>
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

export default ProfileUpdate
