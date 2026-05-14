import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">

      <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Log In
        </h1>

        <p className="text-center text-gray-500 text-sm mb-6">
          Welcome back! Please enter your details
        </p>

        {/* Username */}
        <div className="mb-4">
          <label className="text-sm text-gray-700 font-medium">
            Username
          </label>

          <input
            type="text"
            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 outline-none focus:border-blue-500"
            placeholder="Enter your username"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-700 font-medium">
            Password
          </label>

          <input
            type="password"
            className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Log In
        </button>

        {/* Register link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Haven’t signed up?{" "}
          <NavLink
            to="/Register"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </NavLink>
        </p>

      </form>
    </div>
  );
};

export default Login;