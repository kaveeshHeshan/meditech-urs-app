import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('The email field is required'),
      password: Yup.string()
        .required('The password field is required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
    <div className="mt-10 mb-3 text-white text-left lg:mx-[30rem] sm:mx-24">
        <h1 className='text-3xl'>Welcome Back</h1>
        <span className='text-[20px]'>Login to your account</span>
    </div>
    <div className="bg-white lg:mx-[30rem] sm:mx-24 pt-3 pb-12 rounded-lg login">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="form-header pt-6 -mb-3 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            ABC COMPANY
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="email" className="text-[17px] block text-left font-medium leading-6 text-gray-900">
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`${formik.touched.email && formik.errors.email ? 'outline-none border-2 border-rose-500' : null } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
                {formik.touched.email && formik.errors.email ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.email}</div> : null}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-[17px] block text-left font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`${formik.touched.password && formik.errors.password ? 'outline-none border-2 border-rose-500' : null } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
                {formik.touched.password && formik.errors.password ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.password}</div> : null}
              </div>
            </div>

            <div className='pt-6'>
              <button
                type="submit"
                className="text-[17px] login-submit-btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-[17px] external-link-orange mt-10 text-left text-gray-900 font-bold">
            Still Have No account?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              SIGNUP
            </Link> Now.
          </p>
        </div>
      </div>
      <div className="mb-3 px-3 pt-3 text-white text-left lg:mx-[30rem] sm:mx-24">
        <div className="">
            <ul className='flex'>
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

export default Login
