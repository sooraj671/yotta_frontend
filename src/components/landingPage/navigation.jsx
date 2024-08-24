import React from 'react';
import '../../style.css'; // Ensure this path is correct and points to your custom styles

const navLinkStyle = {
  fontSize: '18px', // Adjust the font size as needed
};
export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#page-top">React Landing Page</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#features" style={navLinkStyle}>Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about" style={navLinkStyle}>About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#services" style={navLinkStyle}>Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio" style={navLinkStyle}>Gallery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#testimonials" style={navLinkStyle}>Testimonials</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#team" style={navLinkStyle}>Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact" style={navLinkStyle}>Contact</a>
      </li>
    </ul>
        </div>
      </div>
    </nav>
  );
};
