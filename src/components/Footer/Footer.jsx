import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="contact-section">
        <h2>Our Experts Are Ready To Help</h2>
        <h3>Plan Your Next Experience</h3>
        <p className="para-footer">
          Our friendly customer service representatives are always happy to
          answer your questions and offer further advice.
        </p>
        <div className="contact-grid">
          <div className="contact-items">
            <i className="circle fas fa-phone-alt"></i>
            <h6>CALL US NOW</h6>
            <p>+91 9315660204</p>
          </div>
          <div className="contact-items">
            <i className="circle fas fa-envelope"></i>
            <h6>EMAIL US</h6>
            <p>info@example.com</p>
          </div>
          <div className="contact-items">
            <i className="circle fas fa-book"></i>
            <h6>BOOKING ENQUIRY</h6>
            <p>Send Now</p>
          </div>
          <div className="contact-items">
            <i className="circle fas fa-share-alt"></i>
            <h6>CONNECT VIA SOCIAL</h6>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <img src="/" alt="Company Logo" className="footer-logo" />
            <p>
              Our company offers a wide range of travel services, including
              customized tours, adventure travel, cultural immersion
              experiences, and more...
            </p>
            <ul className="footer-links">
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Refund Policy</Link>
              </li>
              <li>
                <Link to="#">Help Center</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Company</h6>
            <ul>
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">News</Link>
              </li>
              <li>
                <Link to="#">Support</Link>
              </li>
              <li>
                <Link to="#">Pay to Service</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Contact</h6>
            <p>Office No. 603, GD Lorem ipsum dolor sit.</p>
            <p>255551984</p>
            <p>abc@gmail.com.com</p>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div></div>
          <p>© Copyright 2024. All rights reserved | Designed by Zarar</p>
          <div className="payment-icons">
            <img src="/path/to/mastercard.png" alt="MasterCard" />
            <img src="/path/to/Linkmex.png" alt="Amex" />
            <img src="/path/to/visa.png" alt="Visa" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
