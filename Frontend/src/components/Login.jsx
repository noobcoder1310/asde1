import React from 'react'
import { Link } from 'react-router-dom'; 
import { useForm } from "react-hook-form"// Import Link


function Login() {
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
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form  onSubmit={handleSubmit(onSubmit)}method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button 
      onClick={() => document.getElementById("my_modal_3").close()} 
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
    >
      ✕
    </button>
   
    <h3 className="font-bold text-lg cursor-pointer">Login</h3>
    
    <div className='mt-4 space-y-2'>
        <span>Email</span>
       < br/>
        <input type='Email'
        placeholder="Enter ur email" className='w-80 px-3 py-1 border rounded-md'
        {...register("email", { required: true })}
        />
        <br/>
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
       < br/>
        <input type='Password'
        placeholder="Enter ur Password" className='w-80 px-3 py-1 border rounded-md'
        {...register("password", { required: true })}
        />
        <br/>
        {errors.password  && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer'>
            Login
        </button>
        <p>Not registered? {""}
        <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signp</Link> {""}</p>
    </div>
    </form>
    
  </div>
</dialog>
    </div>
  )
}

export default Login
