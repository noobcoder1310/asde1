import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [authUser, setAuthUser] = useContext(AuthContext);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/users/login", userInfo);
      if (res.data) {
        toast.success("Logged in successfully");
        setAuthUser(res.data.user);
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        document.getElementById("login_modal")?.close(); // Close the modal
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="relative">
      {/* ✕ Close Button */}
      

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 pt-10">
        <h2 className="text-xl font-semibold mb-2 dark:text-white">Login</h2>

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
        
        {/* SignUp Link at Bottom */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link 
            to="/signup" // Directs to the SignUp page
            className="text-blue-500 underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
