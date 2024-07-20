import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";
import AppContext from "../context/appContext";
import defaultImage from "../assets/default-image.jpg";
import img11 from "../assets/img11.jpeg";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import "./amazonSearch.css"; // Import your CSS file

const AmazonSearch = () => {
  const navigate = useNavigate();
  const { addToCart, cart } = useContext(AppContext); // Use addToCart and cart from context
  const products = useGetProducts({});

  // Function to handle image errors and provide default images based on productId
  const handleImageError = (event, productId) => {
    switch (productId) {
      case 8:
      case 101:
      case 102:
        event.target.src = defaultImage; // Default image for specific product IDs
        break;
      case 11:
        event.target.src = img11; // Specific image for product ID 11
        break;
      default:
        event.target.src = defaultImage; // Default fallback image
        break;
    }
  };

  // Function to navigate to ProductInfo page
  const goToProductInfo = (productId) => {
    navigate(`/search/${productId}`);
  };

  return (
    <>
      <Navbar cartCount={cart.length} /> {/* Pass cart count to Navbar */}
      <CategoryBar />

      <div className="products-container">
        {products.map((elem) => (
          <div
            className="search-product-card"
            key={elem.id}
            onClick={() => goToProductInfo(elem.id)}
          >
            <div className="image-container">
              <img
                src={elem.images && elem.images.length > 0 ? elem.images[0] : defaultImage}
                alt={elem.title}
                className="product-image"
                onError={(event) => handleImageError(event, elem.id)} // Pass product ID to handleImageError
              />
            </div>
            <div className="product-info">
              <p className="product-title">{elem.title}</p>
              <p className="product-price">${elem.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(elem); // Call addToCart from context
                }}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AmazonSearch;
