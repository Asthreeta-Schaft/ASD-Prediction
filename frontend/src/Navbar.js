import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={`${process.env.PUBLIC_URL}/logo-no-background.png`} alt="Logo" height="40" />
        </div>

        <div className="navbar-links-desktop">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
  <span className="bar top-bar"></span>
  <span className="bar middle-bar"></span>
  <span className="bar bottom-bar"></span>
</div>
      </nav>

      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
      </div>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Navbar;