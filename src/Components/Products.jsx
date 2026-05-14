import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./Context";

const Products = () => {
  const [data, setdata] = useState([]);
  const { item, setitem } = useContext(CartContext);
  const [Toast, setToast] = useState("");

  useEffect(() => {
    async function items() {
      let a = await fetch("https://fakestoreapi.com/products");
      let b = await a.json();
      setdata(b);
    }
    items();
  }, []);

  function addToCart(a) {
    setitem((prev)=>[...prev, a]);

    setToast("Item added to cart ✓");

    setTimeout(() => {
      setToast("");
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 relative">

      {/* Toast */}
      {Toast && (
        <div className="fixed top-5 right-5 bg-gray-900 text-white px-5 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          {Toast}
        </div>
      )}

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Featured Products
      </h1>

      {/* PRODUCTS GRID */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {data.map((s) => (
          <li
            key={s.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition border border-gray-200 flex flex-col"
          >

            {/* IMAGE */}
            <div className="bg-gray-50 rounded-t-xl p-4 flex justify-center items-center h-44">
              <img
                src={s.image}
                alt="Product"
                className="h-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col flex-1">

              <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
                {s.title}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                {s.category}
              </p>

              <p className="text-lg font-bold text-gray-900 mt-2">
                ${s.price}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => addToCart(s)}
                className="mt-auto bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>

                Add to Cart
              </button>

            </div>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Products;