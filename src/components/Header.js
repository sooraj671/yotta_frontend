import React from 'react';
import '../Header.css'; // Optional: for custom styling

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="../../public/yotta_logo.jpg" alt="Logo" className="header__logo-image" />
      </div>
      <div className="header__title">
        <h1>Yotta Academy</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header__actions">
        <button className="header__login-btn">Tutor</button>
        <button className="header__signup-btn">Student</button>
      </div>
    </header>
  );
};

export default Header;
