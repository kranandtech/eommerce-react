import React, { useContext } from "react";
import AppContext from "../context/appContext";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";


const Profile = () => {
  const { loggedInUser } = useContext(AppContext);

  return (
    <div className="profile-root-container">
      <Navbar />
      <CategoryBar />
      <div className="profile-container">
        <h1>Profile</h1>
        {loggedInUser ? (
          <div className="profile-details">
            <h2>User Information</h2>
            <p>Name: {loggedInUser.name}</p>
            <p>Email: {loggedInUser.email}</p>
            {/* Add more profile information as needed */}
          </div>
        ) : (
          <p>Please log in to view your profile.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
