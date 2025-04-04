import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"// Import Link


function SignUp() {
  const {
      register,
      handleSubmit,
      
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log("Login Data:", data);
      // You can add authentication logic here
      document.getElementById("my_modal_3").close(); // ✅ Close the modal after login
    };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="border-2 p-6 relative rounded-md shadow-md w-[600px]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button with correct positioning */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
        
          <h3 className="font-bold text-lg cursor-pointer">Sign Up</h3>
          <div className='mt-4 space-y-2'>
        <span>Name</span>
       < br/>
        <input type='Name'
        placeholder="Enter ur full name" className='w-80 px-3 py-1 border rounded-md'
        {...register("name", { required: true })}

        />
        <br/>
        {errors.name  && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
       

          
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md"
              {...register("email", { required: true })}
            />
            <br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
          
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md"
              {...register("password", { required: true })}

            />
            <br/>
        {errors.password  && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
          
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer">
              Sign Up
            </button>
            <p className='text-xl'>
              Have account?{" "}
              <button className="underline text-blue-500 cursor-pointer"
              onClick={()=>
                document.getElementById("my_modal_3").showModal()
              }>
                Login
              </button> {""}
              <Login/>
              
            </p>
          </div>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default SignUp;
