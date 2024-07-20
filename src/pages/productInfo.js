import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import useGetProductById from "../hooks/useGetProductById";
import "./productInfo.css"; // Import CSS for ProductInfo page styling

const ProductInfo = ({ setSearchText }) => {
  const params = useParams();
  const productInfo = useGetProductById(params.id);

  return (
    <div>
      <Navbar setSearchText={setSearchText} />
      <div className="product-info-container">
        <div className="product-images">
          {productInfo?.images?.map((imgLink, index) => (
            <img key={index} src={imgLink} alt={productInfo.title} className="product-image" />
          ))}
        </div>
        <div className="product-details">
          <h1 className="product-title">{productInfo.title}</h1>
          <p className="product-description">{productInfo.description}</p>
          <div className="product-price">${productInfo.price}</div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
