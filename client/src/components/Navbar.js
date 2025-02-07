import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa";


export const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">Zippy</div>
      <ul className="sidebar-links">
        <li>
          <Link to="/">
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignInAlt className="icon" /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUserPlus className="icon" /> Register
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser className="icon" /> Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};
