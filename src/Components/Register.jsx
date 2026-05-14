import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    setpw: "",
    confirmpw: "",
  });

  function change(e) {
    const updated = { ...form, [e.target.name]: e.target.value };
    setform(updated);
    console.log(updated);
  }

  const [error, seterror] = useState({
    name: "",
    email: "",
    setpw: "",
    confirmpw: "",
    pwmatch: "",
    all: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">

      <form
        onSubmit={(e) => {
          e.preventDefault();

          let newError = {
            name: "",
            email: "",
            setpw: "",
            confirmpw: "",
            pwmatch: "",
            all: "",
          };

          if (form.name.trim() === "") newError.name = "Name cannot be empty";
          if (form.email.trim() === "") newError.email = "Email cannot be empty";
          if (form.setpw.trim() === "") newError.setpw = "Password cannot be empty";
          if (form.setpw.length < 6) newError.setpw = "Password must be at least 6 characters";
          if (form.confirmpw.trim() === "") newError.confirmpw = "Confirm the password";
          if (form.setpw !== form.confirmpw && form.confirmpw.trim() !== "")
            newError.pwmatch = "Passwords do not match";

          seterror(newError);

          if (
            !newError.setpw &&
            !newError.confirmpw &&
            !newError.name &&
            !newError.email &&
            !newError.pwmatch
          ) {
            alert("form submitted");
          }
        }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
      >

        {/* Title */}
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Create Account
        </h3>

        <p className="text-center text-gray-500 text-sm mb-6">
          Join us and start shopping
        </p>

        {/* Name */}
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={change}
            placeholder="Full Name"
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 outline-none border ${
              error.name ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500`}
          />
          <p className="text-red-500 text-sm mt-1">{error.name}</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={change}
            placeholder="Email Address"
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 outline-none border ${
              error.email ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500`}
          />
          <p className="text-red-500 text-sm mt-1">{error.email}</p>
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            name="setpw"
            value={form.setpw}
            onChange={change}
            placeholder="Password"
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 outline-none border ${
              error.setpw ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500`}
          />
          <p className="text-red-500 text-sm mt-1">{error.setpw}</p>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <input
            type="password"
            name="confirmpw"
            value={form.confirmpw}
            onChange={change}
            placeholder="Confirm Password"
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 outline-none border ${
              error.confirmpw || error.pwmatch
                ? "border-red-500"
                : "border-gray-300"
            } focus:border-blue-500`}
          />
          <p className="text-red-500 text-sm mt-1">{error.confirmpw}</p>
          <p className="text-red-500 text-sm">{error.pwmatch}</p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>

        {/* Login link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <NavLink to="/Login" className="text-blue-600 hover:underline">
            Log in
          </NavLink>
        </p>

      </form>
    </div>
  );
};

export default Register;