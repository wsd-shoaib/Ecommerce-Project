import React, { useState, useContext } from "react";
import "./Nav.css";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaTimes,
  FaShopify,
} from "react-icons/fa";
import { FaBarsStaggered, FaMoon, FaSun } from "react-icons/fa6";
import { ThemeContext } from "../Context/ThemeContext";
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { cartItems } = useContext(CartContext);
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="nav-top">
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            Shop
            <span>
              <FaShopify />
            </span>
            House
          </NavLink>
        </div>

        <ul className="nav-menu desktop-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="nav-right">
          <button className="dark-toggle" onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
            <FaBarsStaggered />
          </button>
        </div>
      </div>

      <div className="nav-bottom">
        <div className="search-box">
          <input type="text" placeholder="Search products..." />
          <button>
            <FaSearch />
          </button>
        </div>

        <ul className="icon-list">
          <li>
            {!isAuthenticated ? (
              <NavLink to="/signin" title="Login">
                <FaUser />
              </NavLink>
            ) : (
              <div className="user-info">
                <span title={user.email}>{user.email.split("@")[0]}</span>
                <FaUser
                  title="Logout"
                  style={{ cursor: "pointer", marginLeft: "8px" }}
                  onClick={logout}
                />
              </div>
            )}
          </li>
          <li>
            <NavLink to="/cart" title="Cart">
              <FaShoppingCart />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={`side-drawer ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          <FaTimes />
        </button>
        <ul className="nav-menu mobile-menu">
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" onClick={closeMenu}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
