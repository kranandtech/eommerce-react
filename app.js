import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContext from "./src/context/appContext";
import HomePage from "./src/pages/homePage";
import AmazonSearch from "./src/pages/amazonSearch";
import SignUp from "./src/pages/signUp";
import Login from "./src/pages/signIn";
import ProductInfo from "./src/pages/productInfo";
import Navbar from "./src/components/navbar";
import Cart from "./src/pages/cart";
import Profile from "./src/pages/profile";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const categories = [
  "Electronics",
  "Clothes",
  "Furniture",
  "Shoes",
  "Books",
  "Miscellaneous",
];

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/search",
      element: <AmazonSearch />,
    },
    {
      path: "/search/:id",
      element: <ProductInfo />,
    },
    {
      path: "/signup",
      element: loggedInUser ? <HomePage /> : <SignUp />,
    },
    {
      path: "/login",
      element: loggedInUser ? <HomePage /> : <Login />,
    },
    {
      path: "/cart",
      element: loggedInUser ? <Cart /> : <Login />,
    },
    {
      path: "/profile",
      element: loggedInUser ? <Profile /> : <Login />,
    },
  ]);

  const addToCart = (elem) => {
    const isPresent = cart.findIndex((cI) => cI.id === elem.id);
    if (isPresent === -1) {
      const newCart = [...cart];
      newCart.push({
        title: elem.title,
        id: elem.id,
        price: elem.price,
        images: elem.images[0],
        count: 1,
      });
      setCart(newCart);
    } else {
      const newCart = cart.map((cartItem) =>
        cartItem.id === elem.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      );
      setCart(newCart);
    }
  };

  const appLogin = (user) => {
    setLoggedInUser(user);
  };

  const contextValues = {
    loggedInUser,
    cart, // Include cart state
    setCart, // Include setCart function to update cart state
    addToCart,
    categories,
    searchText,
    setSearchText,
    appLogin,
  };

  return (
    <AppContext.Provider value={contextValues}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
};

root.render(<App />);

export default App;
