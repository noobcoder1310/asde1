import React, { useEffect, useState } from "react";
import Login from "./Login";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Navitems = (
    <>
      <li>
        <a href="/" className="px-4 py-2">
          Home
        </a>
      </li>
      <li>
        <a href="/course" className="px-4 py-2">
          Course
        </a>
      </li>
      <li>
        <a href="/contact" className="px-4 py-2">
          Contact
        </a>
      </li>
      <li>
        <a href="/about" className="px-4 py-2">
          About
        </a>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out z-50 ${
        sticky ? "shadow-lg" : ""
      }`}
    >
      <div className="navbar flex justify-between px-6 py-3">
        {/* ✅ Left Side: Logo */}
        <div className="navbar-start">
          <a className="text-2xl font-bold cursor-pointer dark:text-white">
            BookStore
          </a>
        </div>

        {/* ✅ Center: Navigation Items (Shifted Right) */}
        <div className="navbar-center hidden lg:flex items-center space-x-6">
          <ul className="menu menu-horizontal flex items-center gap-6 text-black dark:text-white">
            {Navitems}
          </ul>
        </div>

        {/* ✅ Right Side: Search Bar + Theme Toggle + Login */}
        <div className="navbar-end flex items-center gap-20">
          {/* Search Bar */}
          <label className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
            <svg
              className="h-5 w-5 opacity-50 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
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

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <svg
                className="h-7 w-7 fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 5V3m0 18v-2m7-7h2m-18 0H3m14.07-7.07l1.41-1.41M5.64 17.66l1.41-1.41M17.66 18.36l-1.41-1.41M6.34 5.64L5.64 6.34M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            ) : (
              <svg
                className="h-7 w-7 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64 13A1 1 0 0020 14.05a8.14 8.14 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2 1 1 0 00-.33-1A10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
              </svg>
            )}
          </button>

          {/* Login Button */}
          <a
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 duration-300 cursor-pointer"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </a>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
