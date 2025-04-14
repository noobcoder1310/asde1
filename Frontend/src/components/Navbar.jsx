import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import Login from "./Login";
import Logout from "./Logout";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out z-50 ${sticky ? "shadow-lg" : ""}`}
    >
      <div className="navbar flex justify-between px-6 py-3">
        <div className="navbar-start">
          <a className="text-2xl font-bold cursor-pointer dark:text-white">BookStore</a>
        </div>

        <div className="navbar-center hidden lg:flex items-center space-x-6">
          <ul className="menu menu-horizontal flex items-center gap-6 text-black dark:text-white">
            <li><a href="/" className="px-4 py-2">Home</a></li>
            <li><a href="/course" className="px-4 py-2">Course</a></li>
            <li><a href="/contact" className="px-4 py-2">Contact</a></li>
            <li><a href="/about" className="px-4 py-2">About</a></li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-20">
          <label className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
            <svg className="h-5 w-5 opacity-50 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              className="bg-transparent border-none focus:outline-none p-2 py-2 w-60 text-black dark:text-white"
            />
          </label>

          <button onClick={toggleTheme} aria-label="Toggle Theme">
            <svg className={`h-7 w-7 fill-current ${theme === "light" ? "text-black" : "text-white"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={theme === "light" ? "M12 5V3m0 18v-2m7-7h2m-18 0H3m14.07-7.07l1.41-1.41M5.64 17.66l1.41-1.41M17.66 18.36l-1.41-1.41M6.34 5.64L5.64 6.34M19 12a7 7 0 11-14 0 7 7 0 0114 0z" : "M21.64 13A1 1 0 0020 14.05a8.14 8.14 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2 1 1 0 00-.33-1A10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z"} />
            </svg>
          </button>

          {authUser ? (
            <Logout />
          ) : (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
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
    </div>
  );
}

export default Navbar;
