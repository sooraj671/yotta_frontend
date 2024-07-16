// src/LandingPage.js

import React from 'react';
import '../LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Academic Hub</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Welcome to Academic Hub</h2>
          <p>Your one-stop platform for academic excellence.</p>
          <button className="cta-button">Get Started</button>
        </section>
        <section id="about">
          <h3>About Us</h3>
          <p>Academic Hub is dedicated to providing top-notch educational resources and courses for students worldwide.</p>
        </section>
        <section id="courses">
          <h3>Our Courses</h3>
          <p>Explore a wide range of courses designed to enhance your knowledge and skills.</p>
        </section>
        <section id="contact">
          <h3>Contact Us</h3>
          <p>Have any questions? Feel free to reach out to us.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Academic Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
