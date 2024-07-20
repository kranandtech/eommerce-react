import React, { useState, useEffect } from "react";
import ProductInfoCard from "../components/ProductInfoCard";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import { useNavigate } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";
import defaultImage from "../assets/default-image.jpg"; // Import default image

import "./homePage.css"; // Import CSS for HomePage styling

const HomePage = () => {
  const navigate = useNavigate();
  const products = useGetProducts({ isSearchTextDependent: false });

  // Filtered products for display
  const [filteredProducts, setFilteredProducts] = useState([]);
  const reqLength = 16;

  useEffect(() => {
    let cnt = 0;
    // Filter products randomly or as per requirement
    const filtered = products.filter((elem, idx) => {
      if (Math.random() >= 0.5 || reqLength - cnt === products.length - idx) {
        if (cnt < reqLength) {
          cnt++;
          return true;
        } else return false;
      } else return false;
    });
    setFilteredProducts(filtered);
  }, [products]);

  // State for carousel images and navigation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hardcoded carousel images for demonstration
  const carouselImages = [
    "https://images.unsplash.com/photo-1533022139390-e31c488d69e2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1647221598276-124ebb861536?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1558234200-3efd43232f08?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Navigation function for search page
  const openSearchPage = () => {
    navigate("/search");
  };

  // Function to handle image errors based on product id
  const handleImageError = (event, productId) => {
    if (productId === 8 || productId === 101 || productId === 102) {
      event.target.src = defaultImage; 
    }
    // Add more conditions for other specific product IDs if needed
  };

  // Function to move to the next image in the carousel
  const moveToNextImage = () => {
    const newIndex = (currentImageIndex + 1) % carouselImages.length;
    setCurrentImageIndex(newIndex);
  };

  // Set interval to move carousel every 3 seconds (3000 milliseconds)
  useEffect(() => {
    const interval = setInterval(moveToNextImage, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="homepage-root-container">
      <Navbar openSearchPage={openSearchPage} />
      <CategoryBar />
      <div className="homepage-body">
        <div className="carousel-container">
          <img
            className="carousel-image"
            src={carouselImages[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <span
                key={index}
                className={index === currentImageIndex ? "active" : ""}
                onClick={() => setCurrentImageIndex(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <ProductInfoCard
              key={index}
              data={product}
              handleImageError={handleImageError} // Pass handleImageError function to ProductInfoCard
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
