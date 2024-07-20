import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../assets/default-image.jpg"; // Import default image
import img11 from "../assets/img11.jpeg"; // Import specific image for product ID 11
import "./productInfoCard.css"; // Import CSS for ProductInfoCard styling

const ProductInfoCard = ({ data, handleImageError }) => {
  const productId = data.id;

 

  return (
    <div className="product-info-card">
      <Link to={`/search/${data.id}`} className="product-link">
        <div className="product-image">
          <img
            src={data.images && data.images.length > 0 ? data.images[0] : defaultImage}
            alt={data.title}
            onError={(event) => handleImageError(event, productId)} // Handle image error based on product ID
          />
        </div>
        <div className="product-details">
          <h3>{data.title}</h3>
          {/* <p className="product-description">{data.description}</p> */}
          <div className="product-price">${data.price}</div>
         
        </div>
      </Link>
    </div>
  );
};

export default ProductInfoCard;
