import React from "react";
import "../Header.css";

const TopHeader = ({ setView }) =>  {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src={`${process.env.PUBLIC_URL}/yotta_logo2.png`}
          alt="Logo"
          className="header__logo-image"
        />
      </div>
      <div className="header__title">
        <h1>Yotta Academy</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header__actions">
        <button className="header__login-btn" onClick={() => setView("login")}>Login</button>
        <button className="header__login-btn" onClick={() => setView("signup")}>Tutor</button>
        <button className="header__signup-btn" onClick={() => setView("signup")}>Student</button>
      </div>
    </header>
  );
};

export default TopHeader;
