import React, { useState, useEffect } from "react";
import "./TutorProfile.css";
import profileService from '../../services/profileService';
import Reviews from './Reviews';

  

function Profile({ profileId }) { // Accept profileId as a prop
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState('PROFILE');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfileById(profileId);
        setProfile(data.data);
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
            {/* {profile.courses.map((course, index) => (
              <span key={index}>{course}</span>
            ))} */}


            {profile.levels.map((level, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                {level.subjects.length > 0 ? (
                  <ul>
                    {level.subjects.map((subject, subIndex) => (
                      // <li key={subIndex} style={{ marginBottom: '10px' }}>{subject}</li>
                      <span key={index}>{subject}</span>
                    ))}
                  </ul>
                ) : (
                  <p>No subjects listed</p>
                )}
              </div>
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
              <div style={{borderRadius: '30px', borderColor: 'black'}}>
                <p>PSLE</p>
                <p>“O” Level</p>
                <p>“A” Level</p>
                <p>Diploma</p>
                <p>Degree</p>
              </div>
              <div>
                <p>Name of Educational Institution</p>
                <p>{profile.educationDetails[0].institution}</p>
                <p>Course of Study</p>
                <p>{profile.educationDetails[0].course}</p>
                <p>Grade Point Average</p>
                <p>{profile.educationDetails[0].gpa} / 5.0</p>
              </div>
            </div>
          </section>

          </>
        )}
        {selectedTab === 'LESSON' && (
          <>
            <section className="profile-section">
              <h2>Rates</h2>
              <div>
                {profile.levels.map((level, index) => (
                <span key={index} style={{ display: 'block', marginBottom: '5px' }}>
                  {level.name}: {level.rate} (hourly rate)
                </span>
            ))}
            </div>
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
            <div>
            {/* {profile.preferredLocations} */}
            {profile.preferredLocations.map((location, index) => (
                <span key={index} style={{ display: 'block', marginBottom: '5px' }}>
                  {location}
                </span>
            ))}
            </div>
          </section>

          <section className="profile-section">
          <h2>Levels</h2>
            <div>
                {profile.levels.map((level, index) => (
                <span key={index} style={{ display: 'block', marginBottom: '5px' }}>
                  {level.name}
                </span>
            ))}
            </div>
          </section>

          <section className="profile-section">
          <h2>Subjects</h2>
          <div>
            {profile.levels.map((level, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                {level.subjects.length > 0 ? (
                  <ul>
                    {level.subjects.map((subject, subIndex) => (
                      <li key={subIndex} style={{ marginBottom: '10px' }}>{subject}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No subjects listed</p>
                )}
              </div>
            ))}
          </div>
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
            {profile.educationDetails[0].institution}   {/*field not available*/}
            </p>
          </section>

          <section className="profile-section">
          <h2>Date Joined</h2>
            <p>
            {profile.dateJoined}  {/*field not available*/}
            </p>
          </section>
          
          </>
          
          
          )}
        {selectedTab === 'REVIEWS' && <Reviews/>}
      </section>
    </div>
  );
}

export default Profile;
