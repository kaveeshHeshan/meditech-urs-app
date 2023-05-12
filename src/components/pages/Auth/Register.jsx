import {useState, React} from 'react';
import { BiChevronLeft } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = () => {

  const [uniqueEmailvalidation, setUniqueEmailvalidation] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      secondName: '',
      countryCode: '',
      mobileNumber: '',
      dob: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('The first name field is required'),
      secondName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('The second name field is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('The email field is required')
        .test('Unique Email', 'Email address is already exist in the system. Please try with different email address', // <- key, message
                function (value) {
                    return new Promise((resolve, reject) => {
                        axios.get(`https://mditest.elifeamerica.com/api/v1/email/check/${value}`)
                            .then((res) => {
                                if (res.data.result.exist == true) {
                                  resolve(false);
                                } else {
                                  resolve(true);
                                }
                            })
                            .catch((error) => {
                                // block
                            })
                    })
                }
            ),
      countryCode: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't be negative")
        .integer("A phone number can't include a decimal point")
        .required('The country code field is required (Ex: +94)'),
      mobileNumber: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required('The mobile number field is required'),
      dob:Yup.date()
        .required('The date of birth field is required'),
      password: Yup.string()
        .required('The password field is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('The confirm password field is required'),
    }),
    onSubmit: values => {
      // Data object
      const userData = {
        email : values.email,
        first_name : values.firstName,
        last_name : values.secondName,
        password : values.password,
        mobile_number: "+" + values.countryCode + values.mobileNumber,
        dob: values.dob,
      }

      axios.post('https://mditest.elifeamerica.com/api/v1/register', userData)
      .then(res=>{
          console.log("Success Part");
          console.log(res);
          if (res.data.status_code == 200 && res.data.status == 'OK') {
            window.location.replace('/success');
          }
      }).catch(error=>{
          console.log("Error Part");
          console.log(error);
      });
    },
  });

  function redirectPage(url) {
    const nav = useNavigate();
    nav(url);
  }
  return (
    <>
    <div className="mt-10 flex mb-3 text-white text-left lg:mx-[30rem] sm:mx-24">
        <Link to='/login'><BiChevronLeft size={42}/></Link><h1 className='text-3xl'>Create Account</h1>
    </div>
    <div className="bg-white lg:mx-[30rem] sm:mx-24 pt-3 pb-12 rounded-lg login">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="form-header pt-6 -mb-3 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            ABC COMPANY
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-5 w-full" action="#" method="POST" onSubmit={formik.handleSubmit} >
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="text-[17px] text-left block font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        className={`${formik.touched.firstName && formik.errors.firstName ? 'outline-none border-2 border-rose-500' : null } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.firstName}</div> : null}
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="second-name" className="text-[17px] text-left block font-medium leading-6 text-gray-900">
                        Second name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="secondName"
                        id="secondName"
                        autoComplete="given-name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.secondName}
                        className={`${formik.touched.secondName && formik.errors.secondName ? 'outline-none border-2 border-rose-500' : null } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                        />
                        {formik.touched.secondName && formik.errors.secondName ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.secondName}</div> : null}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`${formik.touched.email && formik.errors.email ? 'outline-none border-2 border-rose-500' : null } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
                {formik.touched.email && formik.errors.email ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.email}</div> : null}
                {uniqueEmailvalidation ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>Email is already in use.</div> : null}
              </div>
            </div>
            <div className="">
                <label className="-mb-10 text-[17px] block text-left font-medium text-gray-900">
                    Mobile Number
                </label>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                        <div className="mt-2">
                            <input
                            type="number"
                            name="countryCode"
                            id="countryCode"
                            autoComplete="given-name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.countryCode}
                            className={`${formik.touched.countryCode && formik.errors.countryCode ? 'outline-none border-2 border-rose-500' : null } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            />
                          {formik.touched.countryCode && formik.errors.countryCode ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.countryCode}</div> : null}
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <div className="mt-2">
                            <input
                            type="number"
                            name="mobileNumber"
                            id="mobileNumber"
                            autoComplete="given-name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mobileNumber}
                            className={`${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'outline-none border-2 border-rose-500' : null } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            />
                          {formik.touched.mobileNumber && formik.errors.mobileNumber ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.mobileNumber}</div> : null}
                        </div>
                    </div>
                </div>
            </div>

            <div>
              <label htmlFor="dob" className="text-[17px] block text-left font-medium leading-6 text-gray-900">
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  autoComplete="dob"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                  className={`${formik.touched.dob && formik.errors.dob ? 'outline-none border-2 border-rose-500' : null } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
                {formik.touched.dob && formik.errors.dob ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.dob}</div> : null}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`${formik.touched.password && formik.errors.password ? 'outline-none border-2 border-rose-500' : null } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
                {formik.touched.password && formik.errors.password ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.password}</div> : null}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirm-password" className="text-[17px] block text-left font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  className={`${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'outline-none border-2 border-rose-500' : null } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.confirmPassword}</div> : null}
              </div>
            </div>

            <div className='pt-6'>
              <button
                type="submit"
                className="text-[17px] login-submit-btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
          </form>
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

export default Register
