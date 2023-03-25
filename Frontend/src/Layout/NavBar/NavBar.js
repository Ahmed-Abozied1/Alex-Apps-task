import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const userData = JSON.parse(localStorage.getItem("user"));

  const { avatar, username } = userData[0];
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <div>
        <button onClick={handleLogout} className="logouotBtn">
          Logout
        </button>

        <img src={avatar} style={{ width: "60px" }} />
        <span className="username">{username}</span>
      </div>
    </nav>
  );
}

export default Navbar;
