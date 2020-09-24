import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" activeClassName="nav_active" className="nav_item">Home</NavLink>
      <NavLink exact to="/products" activeClassName="nav_active" className="nav_item">Products</NavLink>
      <NavLink exact to="/my-profile" activeClassName="nav_active" className="nav_item">My Profile</NavLink>
      <NavLink exact to="/about-us" activeClassName="nav_active" className="nav_item">About Us</NavLink>
    </div>
  );
}

export default Header;