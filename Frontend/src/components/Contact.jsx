import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-pink-500 dark:text-white">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 dark:text-white">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 dark:text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 dark:text-white">Message</label>
            <textarea
              placeholder="Enter your message"
              {...register("message", { required: true })}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
