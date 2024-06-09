import React from "react";
import "./Header.css";
import logo from "../../src/assets/turners 22-updated.jpg";

function Header() {
  return (
    <header className="header">
      <div className="top-nav">
        <div className="container">
          <a href="#" className="logo">
            <img src={logo} alt="Turners Cars" />
          </a>
          <div className="top-links">
            <a href="#">LOGIN OR REGISTER</a>
            <a href="#">0800 887 637</a>
            <a href="#">Find Us</a>
            <a href="#">中文</a>
          </div>
        </div>
      </div>
      <div className="main-nav">
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
    </header>
  );
}

export default Header;
