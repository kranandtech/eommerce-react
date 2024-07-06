import React from "react";
import ProductInfoCard from "../components/ProductInfoCard";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const { productInfoCards, categories, setSearchText, searchText } = props;
  const navigate = useNavigate();
  const openSearchPage = () => {
    navigate("/search");
  };

  return (
    <div className="homepage-root-container">
      <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage} searchText={searchText} />
      <CategoryBar categories={categories} />
      <div className="homepage-body">
        <img
          className="carousal-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
          alt="Carousal"
        />
        <div className="products-cards-container">
          {productInfoCards.map((elem, index) => (
            <ProductInfoCard key={index} data={elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
