import React from "react";
import "./TutorProfile.css";
import profileService from '../../services/profileService';
import { useState, useEffect } from "react";

function Profile() {

  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token'); // or however you manage tokens
      try {
        const data = await profileService.getProfile(token);
        setProfile(data.data); // Adjust according to your API response structure
      } catch (err) {
        setError('Failed to fetch profile',err);
      }
    };

    fetchProfile();
  }, []);

  if (error) return <div>{error}</div>;
  if (!profile) return <div>Loading...</div>;


    return (
      <div className="profile-container">
        <header className="profile-header">
            <img
                src={`${process.env.PUBLIC_URL}/img/team/01.jpg`}
                alt="Profile"
                className="profile-image"
            />
            <div className="profile-info">
                <h1>{profile.firstName} {profile.lastName}</h1>
                <div className="profile-tags">
                <span>Biology</span>
                <span>Chemistry</span>
                <span>A. Maths</span>
                </div>
                <div className="profile-education">
                <p>🎓 NTU Bachelor's in Bioengineering</p>
                <p>📍 {profile.preferredLocations}</p>
                <p>🏫 {profile.educationLevel}</p>
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
          {profile.experiences}
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
              <p>{profile.institution}</p>
              <p>Course of Study</p>
              <p>{profile.course}</p>
              <p>Grade Point Average</p>
              <p>{profile.gpa} / 5.0</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Profile;