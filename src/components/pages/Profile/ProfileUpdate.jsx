import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

// Component imports
import Navbar from '../../inc/Navbar'
import axios from 'axios';
import Cookies from 'js-cookie';


const ProfileUpdate = () => {

    // Retrieve user data from redux store
    const auth = useSelector((state) => state.auth);

    // Get token
    const token = Cookies.get('token');

    useEffect(() => {
      
      if (auth.user.patient.gender == 'male') {
        $( "#gender-male" ).prop( "checked", true );
      } else if(auth.user.patient.gender == 'female') {
        $( "#gender-female" ).prop( "checked", true );
      }else {
        $( "#gender-other" ).prop( "checked", true );
      }
    }, [])
    

  // validation and summbit with formik
    const formik = useFormik({
        initialValues: {
            firstName: auth.user.patient.first_name,
            secondName: auth.user.patient.last_name,
            email: auth.user.patient.email,
            dob: auth.user.patient.dob,
            gender: auth.user.patient.gender,
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
                .required('The email field is required'),
            dob: Yup.string()
                .required('The date of birth field is required'),
            gender: Yup.string()
                .required('The gender field is required'),
        }),
        onSubmit: values => {
            const userUpdatedData = {
                first_name : values.firstName,
                last_name : values.secondName,
                email : values.email,
                dob: values.dob,
                gender: values.gender
            }

            axios.put("https://mditest.elifeamerica.com/api/v1/profile", userUpdatedData, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }).then(res=>{
                
                if (res.status == 200 && res.data.status == 'OK') {
                    
                    Swal.fire({
                        toast:true,
                        position: 'bottom-end',
                        icon: 'success',
                        title: 'Profile updation is successful!',
                        text: 'You will be redirecting to the Profile page now.',
                        showConfirmButton: false,
                        timer: 3500,
                        timerProgressBar:true,
                    });
                    setTimeout(() => {
                        window.location.replace('/profile');
                    }, 4000);
                }
            }).catch(error=>{
                
                Swal.fire({
                    toast:true,
                    position: 'bottom-end',
                    icon: 'success',
                    title: 'OOPs!',
                    text: 'Something went wrong!.',
                    showConfirmButton: false,
                    timer: 3500,
                    timerProgressBar:true,
                });
            });
        },
      });

  return (
    <>
    <div className="bg-white h-full profile">
        <Navbar user={auth.user}/>
        <div className='profile-update'>
            <div className="text-center text-3xl">Edit Profile</div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <form className="space-y-4 w-full" action="#" method="POST" onSubmit={formik.handleSubmit}>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="firstName" className="text-[17px] text-left block font-medium leading-6 text-gray-900">
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
                            <label htmlFor="secondName" className="text-[17px] text-left block font-medium leading-6 text-gray-900">
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
                        <label htmlFor="gender" className="text-[17px] block text-left font-medium leading-6 text-gray-900">
                        Gender
                        </label>
                    </div>
                    <div className="mt-2">
                        <div className={`${formik.touched.gender && formik.errors.gender ? 'outline-none border-2 border-rose-500 rounded-md' : null } flex radio-inputs py-3 px-3`}>
                            <div className="input-container">
                                <input
                                    id="gender-male"
                                    name="gender"
                                    type="radio"
                                    autoComplete="gender"
                                    value="male"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    // value={formik.values.firstName}
                                    // checked={formik.values.gender == 'male' ? checked : null}
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
                                    value="female"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    // checked={formik.values.gender == 'female' ? checked : null}
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
                                    value="other"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    autoComplete="gender"
                                    // checked={formik.values.gender == 'other' ? checked : null}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="radio-title">
                                    <label htmlFor="gender-other">Other</label>
                                </div>
                            </div>
                        </div>
                        {formik.touched.gender && formik.errors.gender ? <div className='text-rose-600 pl-2 pt-1 text-[14px]'>{formik.errors.gender}</div> : null}
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
    <div className="w-full bg-white px-3 pt-6 text-dark text-left lg:px-80 sm:px-24">
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
