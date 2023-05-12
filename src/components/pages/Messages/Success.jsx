import React from 'react';
import {BiCheckCircle} from "react-icons/bi";
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <>
      <div className="m-36 bg-white lg:mx-80 sm:mx-24 pt-3 pb-12 rounded-lg login">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">

            <h2 className="flex form-header pt-6 -mb-3 text-center text-6xl font-bold leading-9 tracking-tight text-gray-900">
                <BiCheckCircle className='flex-auto text-green-600' size={117}/>
            </h2>
            <p className='pt-10 -mb-3 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900'>
                Congratulations
            </p>
            <p className='pt-8 -mb-3 text-[20px] leading-9 tracking-tight'>
                Your Account has been created Successfully!
            </p>
            <div className="pt-8">
                <Link to='/login' className='items-center justify-center success-msg-btn text-center text-[20px] flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Go to Login</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Success
