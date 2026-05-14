import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./Context";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { item, setitem } = useContext(CartContext);

  return (
    <nav className="bg-white-900 text-black-300 px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-2xl font-bold text-black tracking-wide">
            Nepali Pasal
          </h1>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-black pb-1"
                : "hover:text-black transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Products"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-black pb-1"
                : "hover:text-black transition"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-black pb-1"
                : "hover:text-black transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-black pb-1"
                : "hover:text-black transition"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-6 text-black-300">
          
          {/* Profile */}
          <NavLink to="/Register" className="hover:text-black transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </NavLink>

          {/* Cart */}
          <NavLink to="/Cart" className="hover:text-black transition relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </NavLink>
          {item.length}

          {/* Hamburger (Mobile only) */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium px-2">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/Products" onClick={() => setOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/About" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/Contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
