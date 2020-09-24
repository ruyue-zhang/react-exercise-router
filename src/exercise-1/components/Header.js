import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" activeClassName="nav_active" className="nav_item">
          Home
          </NavLink>
          <NavLink to="/products" activeClassName="nav_active" className="nav_item">
          Products
          </NavLink>
          <NavLink to="/my-profile" activeClassName="nav_active" className="nav_item">
          My Profile
          </NavLink>
          <NavLink to="/about-us" activeClassName="nav_active" className="nav_item">
          About Us
          </NavLink>
    </div>
  );
}

export default Header;