import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartContext } from "./Components/Context";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

import "./App.css";

function App() {
  const [item, setitem] = useState([])

  const navigation = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> 
          <Home />
        </>
      ),
    },
    {
      path: "/Products",
      element: (
        <>
          <Navbar />
          <Products />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar /> 
          <About />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar /> 
          <Contact />
        </>
      ),
    },
    {
      path: "/Register",
      element: (
        <>
          <Navbar /> 
          <Register />
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <Navbar /> 
          <Cart />
        </>
      ),
    },
       {
      path: "/Login",
      element: (
        <>
          <Navbar /> 
          <Login />
        </>
      ),
    },
  ]);

  
  return (
    <>
      <CartContext.Provider value={{ item, setitem }}>
        <RouterProvider router={navigation} />
        <Footer />
       </CartContext.Provider>
    </>
  );
}

export default App;
