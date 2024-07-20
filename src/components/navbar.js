import React, { useContext } from "react";
import { IoSearchSharp, IoPersonCircle, IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/appContext";
import "./navbar.css";

const Navbar = ({ openSearchPage, cartCount }) => {
  const { searchText, setSearchText, loggedInUser, appLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      //openSearchPage();
    }
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    appLogin(null);
    navigate("/login");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <nav className="custom-homepage-nav">
      <h4 style={{ marginRight: 10 }} onClick={handleLogoClick}>
        ShopMate
      </h4>
      <p>
        Address:
        <br />
        LPU University
      </p>
      <div className="custom-homepage-search-container">
        <input
          type="text"
          placeholder="Search..."
          onKeyDown={handleKeyDown}
          onChange={handleSearch}
          value={searchText}
        />
        <button onClick={openSearchPage}>
          <IoSearchSharp />
        </button>
      </div>
      <div className="custom-nav-icons">
        <div className="custom-nav-icon" onClick={() => navigate("/profile")}>
          <IoPersonCircle size={20} />
          <span>Profile</span>
        </div>
        <div className="custom-nav-icon" onClick={goToCart}>
          <IoCart size={20} />
          <span>Cart</span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        {loggedInUser ? (
          <button className="custom-signup-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="custom-signup-button" onClick={handleSignUpClick}>
            Sign Up/Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
