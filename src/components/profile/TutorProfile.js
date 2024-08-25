import React from "react";
import "./TutorProfile.css";



function Profile() {
    return (
      <div className="profile-container">
        <header className="profile-header">
            <img
                src={`${process.env.PUBLIC_URL}/img/team/01.jpg`}
                alt="Profile"
                className="profile-image"
            />
            <div className="profile-info">
                <h1>Minnie</h1>
                <div className="profile-tags">
                <span>Biology</span>
                <span>Chemistry</span>
                <span>A. Maths</span>
                </div>
                <div className="profile-education">
                <p>🎓 NTU Bachelor's in Bioengineering</p>
                <p>🏫 Secondary, Junior College</p>
                <p>📍 North-east</p>
                </div>
            </div>
            <div className="profile-status">
                <span className="premium">👑 Yotta Premium</span>
                <span className="verified">✔ Verified</span>
            </div>
            </header>
        <nav className="profile-nav">
          <button>PROFILE</button>
          <button>LESSON</button>
          <button>DETAILS</button>
          <button>REVIEWS</button>
        </nav>
  
        <section className="profile-section">
          <h2>Elevator Pitch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus massa, tincidunt at consectetur
            tristique, scelerisque a risus. Fusce dignissim dui at magna commodo tincidunt.
          </p>
        </section>
  
        <section className="profile-section">
          <h2>Experiences</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus massa, tincidunt at consectetur
            tristique, scelerisque a risus. Fusce dignissim dui at magna commodo tincidunt.
          </p>
        </section>
  
        <section className="profile-section qualifications">
          <h2>Qualifications</h2>
          <div className="qualification-details">
            <div>
              <p>PSLE</p>
              <p>“O” Level</p>
              <p>“A” Level</p>
              <p>Diploma</p>
              <p>Degree</p>
            </div>
            <div>
              <p>Name of Educational Institution</p>
              <p>Nanyang Technological University, Singapore</p>
              <p>Course of Study</p>
              <p>Bachelor’s Degree in Bioengineering</p>
              <p>Grade Point Average</p>
              <p>4.4 / 5.0</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Profile;