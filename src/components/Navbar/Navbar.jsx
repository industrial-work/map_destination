import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the hamburger menu on item click
  };

  const handleLoginRedirect = () => {
    // Handle redirect logic if needed
  };


  return (
    <>
      <nav id='topnav' className={`navbr sticky ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">

        <div className='img-div'>
          <img className='nav-logo' src="/images/logo.png" alt="Logo" srcset="" />
          </div>
    
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><NavLink exact to="/" onClick={handleMenuItemClick}>Home</NavLink></li>
          <li><NavLink to="/aboutus" onClick={handleMenuItemClick}>About Us</NavLink>
          </li>
          <li><NavLink to="/blogs" onClick={handleMenuItemClick}>Blogs</NavLink></li>
          <li><NavLink to="/services" onClick={handleMenuItemClick}>CSR</NavLink></li>
          <li><NavLink to="/partner" onClick={handleMenuItemClick}>Partner With Us</NavLink></li>
          <li><NavLink to="/helpline" onClick={handleMenuItemClick}>24x7Helpline</NavLink></li>
          <li><NavLink to="/more" onClick={handleMenuItemClick}>More</NavLink></li>
          {/* {!isAuthenticated ? (
            <> */}
              <NavLink to="/login" className="button" onClick={handleMenuItemClick}>Login / Create Account</NavLink>
            {/* </>
          ) : (
            <>
              <LogoutButton onClick={handleLoginRedirect}>Logout</LogoutButton>
            </> */}
          {/* )} */}
        </ul>

        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}