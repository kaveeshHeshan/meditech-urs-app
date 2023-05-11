import React from 'react'
import { Link } from 'react-router-dom'

const Error404Page = () => {
  return (
    <>
      <div className="m-36 bg-white lg:mx-80 sm:mx-24 pt-3 pb-12 rounded-lg login">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">

            <h2 className="form-header pt-6 -mb-3 text-center text-6xl font-bold leading-9 tracking-tight text-gray-900">
                404
            </h2>
            <p className='form-header pt-10 -mb-3 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900'>
                Page Not Found
            </p>
            <div className="mt-10 -mb-5">
              <hr />
            </div>
            <p className='form-header pt-10 -mb-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                It seems like the entered URL is not found. Please try again or go to <Link to='/home' className='text-amber-400 hover:text-amber-600'>Home</Link>
            </p>
          </div>
        </div>
    </>
  )
}

export default Error404Page
