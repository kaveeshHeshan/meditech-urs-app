import {React, ChangeEvent} from 'react';
import Navbar from '../../inc/Navbar'
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import axios from 'axios';

const Profile = () => {

    // Retrieve user data from redux store
    const auth = useSelector((state) => state.auth);

    // Retrieve token
    const token = Cookies.get('token');
    
    const imageUpload = (e) => {
        // console.log(e.target.files[0]);
        const selectedImage = e.target.files[0];

        // console.log("Selected Image :");
        // console.log(selectedImage);

        const formData = new FormData();
        formData.append("profile_image", selectedImage);

        // Profile Image preview
        const objectUrl = URL.createObjectURL(selectedImage)
        $('#profile-img').attr("src", objectUrl);
        console.log(objectUrl);

        // console.log("Form Data :");
        // console.log(formData);

        Swal.fire({
            imageUrl: objectUrl,
            imageHeight: 126,
            imageClass: 'img-rounded',
            title: 'Are you sure?',
            text: "Do you want to save this image as your profile image?",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save it!'
          }).then((result) => {
            if (result.isConfirmed) {

                // Profile Image Update request
                axios.post("https://mditest.elifeamerica.com/api/v1/profile/avatar", formData, {
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                }).then(res=>{
                    console.log("Success");
                    console.log(res);
                    if (res.status == 200 && res.data.status == 'OK') {
                        
                        Swal.fire({
                            toast:true,
                            position: 'bottom-end',
                            icon: 'success',
                            title: 'Profile image updation is successful!',
                            text: 'The page will be reloaded to see the changes now.',
                            showConfirmButton: false,
                            timer: 3500,
                            timerProgressBar:true,
                        });
                        setTimeout(() => {
                            window.location.reload();
                        }, 4000);
                    }
                }).catch(error=>{
                    console.log("Error");
                    console.log(error);
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

                setTimeout(() => {
                    // window.location.reload();
                }, 4000);
            }
          });
    }
    // function imageUpload(e) {
    
    // }
  return (
    <>
    <div className="bg-white h-screen profile">
        <Navbar user={auth.user}/>
        <div className=''>
            <div className='bg-white sm:px-6 lg:py-6 lg:px-44 lg:py-44'>
                <div className="flex px-4 sm:px-0 justify-center">
                    <div className="">
                        <img id='profile-img' className='rounded-full' style={{objectFit:"cover", marginLeft:"10px", height:"126px", width:"126px"}} src={auth.user.patient.profile_image.resource != null ? auth.user.patient.profile_image.resource : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"} alt="" />
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input onChange={imageUpload} type="file" className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-dark
                                hover:file:bg-dark-100"
                            />
                        </label>
                    </div>
                    <div className="pl-4 pt-7 text-[30px] text-left">
                        <h3 className="font-semibold leading-7 text-gray-900">Welcome</h3>
                        <p className="mt-1 max-w-2xl leading-6 text-gray-500">{auth.user.patient.first_name != null ? auth.user.patient.first_name : 'Unknown'} {auth.user.patient.last_name != null ? auth.user.patient.last_name : 'User'}</p>
                    </div>
                </div>
                <div className="text-[17px] mt-6 sm:mx-36 lg:mx-96">
                    <dl className="">
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <d className="font-medium leading-6 text-gray-900 text-left">Email address</d>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">{auth.user.patient.email != null ? auth.user.patient.email : 'Unknown Email'}</dd>
                        </div>
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-medium leading-6 text-gray-900 text-left">Name</dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right normal-case" style={{textTransform:"capitalize"}}>{auth.user.patient.first_name != null ? auth.user.patient.first_name : 'Unknown'} {auth.user.patient.last_name != null ? auth.user.patient.last_name : 'User'}</dd>
                        </div>
                        <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-medium leading-6 text-gray-900 text-left">Gender</dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right normal-case" style={{textTransform:"capitalize"}}>{auth.user.patient.gender != null ? auth.user.patient.gender : 'Unknown'}</dd>
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
