import "./Navbar.css";

import { Link } from "react-router-dom";

import { useContext, useState }
from "react";

import { CartContext }
from "../../context/CartContext";

import { AuthContext }
from "../../context/AuthContext";

import {

  FaSearch,

  FaShoppingCart,

  FaMapMarkerAlt,

  FaBars,

  FaTimes

} from "react-icons/fa";

function Navbar() {

  const { cartItems } =
    useContext(CartContext);

  const { user, logout } =
    useContext(AuthContext);

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (

    <nav className="navbar">

      {/* LOGO */}

      <div className="logo">
        Bhojanalay
      </div>

      {/* LOCATION */}

      <div className="location">

        <FaMapMarkerAlt
          className="location-icon"
        />

        <span>Kolkata</span>

      </div>

      {/* MOBILE MENU BUTTON */}

      <div
        className="menu-toggle"

        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {

          menuOpen
            ? <FaTimes />
            : <FaBars />

        }

      </div>

      {/* NAV LINKS */}

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li>
          <a href="#home">
            Home
          </a>
        </li>

        <li>
          <a href="#restaurants">
            Restaurants
          </a>
        </li>

        <li>
          <a href="#offers">
            Offers
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>

      </ul>

      {/* ICONS */}

      <div className="nav-icons">

        <FaSearch className="icon" />

        <div className="cart-container">

          <Link to="/cart">

            <FaShoppingCart
              className="icon"
            />

          </Link>

          <span className="cart-count">

            {

              cartItems.reduce(

                (total, item) =>

                  total + item.quantity,

                0

              )

            }

          </span>

        </div>

        {user ? (
          <div className="user-profile">
            <span className="user-name">Hello, {user.name.split(" ")[0]}</span>
            <button className="signin-btn" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="signin-btn">
              Sign In
            </button>
          </Link>
        )}

      </div>

    </nav>

  );
}

export default Navbar;