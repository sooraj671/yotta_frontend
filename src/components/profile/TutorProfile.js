import React, { useState, useEffect } from "react";
import "./TutorProfile.css";
import profileService from '../../services/profileService';

  

function Profile({ profileId }) { // Accept profileId as a prop
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState('PROFILE');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfileById(profileId);
        setProfile(data);
      } catch (err) {
        setError('Failed to fetch profile', err);
      }
    };

    fetchProfile();
  }, [profileId]); // Re-fetch when profileId changes

  if (error) return <div>{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <header className="profile-header">
        <img
          // src={`${process.env.PUBLIC_URL}/img/team/01.jpg`}
          src={profile.profilePicUrl}
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h1>{profile.firstName} {profile.lastName}</h1>
          <div className="profile-tags">
            {profile.courses.map((course, index) => (
              <span key={index}>{course}</span>
            ))}
          </div>
          {selectedTab === 'PROFILE' && (
            <div className="profile-education">
              <p>🎓 {profile.educationDetails[0].institution}</p>
              <p>🏫 {profile.educationLevel}</p>
              <p>📍 {profile.preferredLocations}</p>
            </div>
          )}
        </div>
        <div className="profile-status">
          <span className="premium">👑 Yotta Premium</span>
          <span className="verified">✔ Verified</span>
        </div>
      </header>
      
      <nav className="profile-nav">
        <button onClick={() => setSelectedTab('PROFILE')}>PROFILE</button>
        <button onClick={() => setSelectedTab('LESSON')}>LESSON</button>
        <button onClick={() => setSelectedTab('DETAILS')}>DETAILS</button>
        <button onClick={() => setSelectedTab('REVIEWS')}>REVIEWS</button>
      </nav>

      <section className="profile-section">
        {selectedTab === 'PROFILE' && (
          <>
          <section>
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

          </>
        )}
        {selectedTab === 'LESSON' && (
          <>
            <section className="profile-section">
            <h2>Rates</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus massa, tincidunt at consectetur tristique, scelerisque a risus.
Fusce dignissim dui at magna commodo tincidunt.
            </p>
          </section>
          <section className="profile-section">
          <h2>Availablities</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus massa, tincidunt at consectetur tristique, scelerisque a risus.
Fusce dignissim dui at magna commodo tincidunt.
            </p>
          </section>

          <section className="profile-section">
          <h2>Locations</h2>
            <p>
            {profile.preferredLocations}
            </p>
          </section>
          <section className="profile-section">
          <h2>Levels</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus massa, tincidunt at consectetur tristique, scelerisque a risus.
Fusce dignissim dui at magna commodo tincidunt.
            </p>
          </section>

          <section className="profile-section">
          <h2>Subjects</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus massa, tincidunt at consectetur tristique, scelerisque a risus.
Fusce dignissim dui at magna commodo tincidunt.
            </p>
          </section>

          </>
        
        )}
        {selectedTab === 'DETAILS' && (
          
          <>
            <section className="profile-section">
          <h2>Name</h2>
            <p>
            {profile.firstName} {profile.lastName}
            </p>
          </section>

          <section className="profile-section">
          <h2>Gender</h2>
            <p>
            {profile.gender}
            </p>
          </section>

          <section className="profile-section">
          <h2>Tutor Category</h2>
            <p>
            {profile.tutorCategory} 
            </p>
          </section>

          <section className="profile-section">
          <h2>education</h2>
            <p>
            {profile.tutorCategory}   {/*field not available*/}
            </p>
          </section>

          <section className="profile-section">
          <h2>Date Joined</h2>
            <p>
            {profile.tutorCategory}  {/*field not available*/}
            </p>
          </section>
          
          </>
          
          
          )}
        {selectedTab === 'REVIEWS' && <p>Reviews clicked</p>}
      </section>
    </div>
  );
}

export default Profile;
