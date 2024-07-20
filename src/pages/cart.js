import React, { useContext } from "react";
import AppContext from "../context/appContext";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import "./cart.css"; // Import your CSS file for cart styling

const Cart = () => {
  const { cart } = useContext(AppContext);

  return (
    <>
      <Navbar /> {/* Include Navbar */}
      <CategoryBar /> {/* Include CategoryBar */}
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="checkout-button">Proceed to Checkout</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
