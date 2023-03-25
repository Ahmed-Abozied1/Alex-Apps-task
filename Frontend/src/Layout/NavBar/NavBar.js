import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import LoginScreen from "../../Screens/LoginPage/LoginPage";

function Navbar() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const { avatar, username } = userData[0];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar ">
    
   <h1 className="logo">Todo App</h1>
      <div className="icons">
      <button onClick={handleLogout} className="logouotBtn">
          Logout
        </button>
        {userData ? (
          <>
            <img src={avatar} style={{ width: "60px" }} />
            <span ><div className="username">{username}</div></span>
          </>
        ) : (
          <LoginScreen />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
