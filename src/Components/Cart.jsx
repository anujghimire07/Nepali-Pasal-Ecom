import React, { useContext } from "react";
import { CartContext } from "./Context";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { item, setitem } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Shopping Cart
        </h1>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-5">
            {/* Empty State moved here */}
            {item.length === 0 && (
              <div className="relative flex items-center justify-center min-h-[350px]">
                {/* Image (rectangular + background) */}
                <img
                  src="Kermit.jfif"
                  alt="empty cart"
                  className="w-full max-w-md h-64 object-cover rounded-xl shadow-md"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-xl text-white text-center px-4">
                  <p className="text-xl font-semibold">Your cart is empty</p>

                  <NavLink
                    to="/Products"
                    className="mt-4 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition"
                  >
                    Start Shopping
                  </NavLink>
                </div>
              </div>
            )}

            {/* Cart Items */}
            {item.map((p, i) => (
              <div
                
                className="bg-white rounded-xl shadow-sm border p-5 flex gap-5 hover:shadow-md transition"
              >
                {/* Image */}
                <div className="w-28 h-28 flex items-center justify-center bg-gray-50 rounded-lg">
                  <img
                    src={p.image}
                    alt="product"
                    className="h-24 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-800 line-clamp-2">
                    {p.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {p.description}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    Category: {p.category}
                  </p>

                  <p className="text-lg font-bold text-gray-900 mt-2">
                    ${p.price}
                  </p>
                </div>

                {/* Remove */}
                <div className="flex items-start">
                  <button
                    onClick={() => {
                      setitem((prev) => prev.filter((_, index) => index !== i));
                    }}
                    className="text-sm bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="bg-white border rounded-xl shadow-sm p-6 h-fit sticky top-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <p>Total Items: {item.length}</p>
              <p>Shipping: Free</p>
            </div>

            <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition font-semibold">
              Proceed to Checkout
            </button>

            <NavLink
              to="/Products"
              className="block text-center mt-4 text-sm text-gray-600 hover:text-black"
            >
              Continue Shopping
            </NavLink>

            <hr className="my-5" />

            <p className="text-sm text-gray-600">Already have an account?</p>

            <NavLink
              to="/Login"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Login for faster checkout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
