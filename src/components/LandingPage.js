import React from "react";
import "../LandingPage.css";

const LandingPage = ({ setView }) => {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <nav className="Landing-nav">
          <div className="nav-logo">Yotta Academy</div>
          <div className="nav-links">
            <a href="#about">About Us</a>
            <a href="#shop">Shop</a>
            <a href="#contact">Contact</a>
            <button className="nav-button" onClick={() => setView("signup")}>
              Find a Tutor
            </button>
            <button className="nav-button" onClick={() => setView("signup")}>
              Be a Tutor
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Looking for Tutors?</h1>
          <p>
            Yotta Academy was established in 2024 with a vision to make
            education accessible to all, pushing the boundaries of education.
          </p>
          <button className="learn-more-button">Learn More</button>
        </section>
        <section className="testimonials">
          <h2>Hear from our users</h2>
          <p>"A one-stop platform to push education beyond boundaries"</p>
          <div className="testimonials-container">
            <div className="testimonial">
              <p>
                "Getting and managing students was made easy with the help of
                the platform"
              </p>
              <span>- Da Zheng, Tutor of 5 years</span>
            </div>
            <div className="testimonial">
              <p>
                "The tutors recommended by the platform helped pushed my
                daughter's grades to another level!"
              </p>
              <span>- Joseph, Father of Marilyn, 8 y/o</span>
            </div>
            <div className="testimonial">
              <p>
                "The tutors excite my son with things outside his syllabus to
                push his interest outside of school"
              </p>
              <span>- Gwendolyn, Mother of Wen Khiey, 15 y/o</span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-logo">Yotta Academy (C) 2024</div>
          <div className="footer-links">
            <div>
              <h4>About Us</h4>
              <a href="#vision">Our Vision & Mission</a>
              <a href="#team">Our Team</a>
              <a href="#contact">Contact Us</a>
            </div>
            <div>
              <h4>Become a Tutor</h4>
              <a href="#strategy">Winning Strategy</a>
              <a href="#services">Our Services</a>
              <a href="#promise">Our Promise</a>
            </div>
            <div>
              <h4>Find a Tutor</h4>
              <a href="#from-zero">From Zero to Hero</a>
              <a href="#platform">Our Platform</a>
              <a href="#testimonials">Our Testimonials</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
