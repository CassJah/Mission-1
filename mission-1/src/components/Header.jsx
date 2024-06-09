import React, { useState } from "react";
import logo from "../../src/assets/turners 22-updated.jpg";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="top-nav">
        <div className="container">
          <a href="#" className="logo">
            <img src={logo} alt="Turners Cars" />
          </a>
          <div className="right-section">
            <div className="top-links">
              <a href="#">
                <i className="fas fa-map-marker-alt"></i> <span>Find Us</span>
              </a>
              <a href="#">
                <i className="fas fa-sign-in-alt"></i>{" "}
                <span>LOGIN OR REGISTER</span>
              </a>
              <a href="#">
                <i className="fas fa-phone"></i> <span>0800 887 637</span>
              </a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={`main-nav ${menuOpen ? "open" : ""}`}>
        <div className="container">
          <nav>
            <a href="#">Find a Car</a>
            <a href="#">How to Buy</a>
            <a href="#">Sell your Car</a>
            <a href="#">Finance & Insurance</a>
            <a href="#">Turners Subscription</a>
            <a href="#">Auctions</a>
            <a href="#">Services & Info</a>
          </nav>
        </div>
      </div>
      <div className="mobile-search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <nav>
            <a href="#">Find a Car</a>
            <a href="#">How to Buy</a>
            <a href="#">Sell your Car</a>
            <a href="#">Finance & Insurance</a>
            <a href="#">Turners Subscription</a>
            <a href="#">Auctions</a>
            <a href="#">Services & Info</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
