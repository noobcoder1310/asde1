import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import Login from './Login';

function SignUp() {
  const location=useLocation();
  const Navigate=useNavigate();
  const from=location.state?.from?.pathname||"/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      Fullname: data.Fullname,
      email: data.email,
      password: data.password,
    };

    await axios.post("http://localhost:4001/users/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successfully");
          Navigate(from,{replace:true});

        }
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          
        
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.message);
        }
      });

    console.log("Signup Data:", data);
    // Close the modal after the signup is complete
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="border-2 p-6 relative rounded-md shadow-md w-[600px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

            <h3 className="font-bold text-lg cursor-pointer">Sign Up</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-80 px-3 py-1 border rounded-md"
                {...register("Fullname", { required: true })}
              />
              <br />
              {errors.Fullname && <span className='text-sm text-red-500'>This field is required</span>}
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
              <br />
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
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer">
                Sign Up
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Login Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <Login />
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default SignUp;
