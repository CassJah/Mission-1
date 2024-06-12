import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="contact-info">
          <p>
            <i className="fas fa-phone"></i>{" "}
            <span>Phone: 0800 TURNERS (0800 887 637)</span>
          </p>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <span>Email: contact@turners.co.nz</span>
          </p>
          <a href="#">FAQs</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
