import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setSearchText, openSearchPage, searchText }) => {
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if(e.target.value!==""){
        openSearchPage();
      }
    }
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const handleLogoClick = () => {
    navigate('/'); 
  };
  return (
    <nav className="homepage-nav">
      <h4 onClick={handleLogoClick} style={{ cursor: 'pointer' }}>Amazon.in</h4>
      <p>
        Address:
        <br />
        LPU University
      </p>
      <div className="homepage-search-container">
        <input
          type="text"
          onKeyDown={handleKeyDown}
          onChange={handleSearch}
          value={searchText}
         
        />
        <button onClick={openSearchPage}>
          <IoSearchSharp />
        </button>
      </div>
      <div className="nav-icons">
        <div>Profile</div>
        <div>Cart</div>
      </div>
    </nav>
  );
};

export default Navbar;
