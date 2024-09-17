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
              <div key={index} style={{ display: 'inline-block', marginBottom: '20px', marginTop: '15px' }}>
                {level.subjects.length > 0 ? (
                  <div style={{ display: 'inline-block', flexWrap: 'wrap', gap: '20px' }}>
                    {level.subjects.map((subject, subIndex) => (
                      <span key={subIndex} style={{ marginRight: '10px' }}>{subject}</span>
                    ))}
                  </div>
                ) : (
                  <p>No subjects listed</p>
                )}
              </div>
            ))}
            
          </div>
          
          <div className="profile-education">
              <p>🎓 {profile.educationDetails[0].institution}</p>
              <p>🏫 {profile.educationLevel}</p>
              <p>📍 {profile.preferredLocations}</p>
            </div>
          
        </div>
        <div className="profile-status">
          <span className="premium">👑 Yotta Premium</span>
          <span className="verified">✔ Verified</span>
        </div>
      </header>
      
      <nav className="profile-nav">
        <button
          className={selectedTab === 'PROFILE' ? 'selected' : ''}
          onClick={() => setSelectedTab('PROFILE')}
        >
          PROFILE
        </button>
        <button
          className={selectedTab === 'LESSON' ? 'selected' : ''}
          onClick={() => setSelectedTab('LESSON')}
        >
          LESSON
        </button>
        <button
          className={selectedTab === 'DETAILS' ? 'selected' : ''}
          onClick={() => setSelectedTab('DETAILS')}
        >
          DETAILS
        </button>
        <button
          className={selectedTab === 'REVIEWS' ? 'selected' : ''}
          onClick={() => setSelectedTab('REVIEWS')}
        >
          REVIEWS
        </button>
      </nav>


      <section className="profile-section">
        {selectedTab === 'PROFILE' && (
          <>
          <section className="profile-section">
            <h2 className="profile-heading">Elevator Pitch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus massa, tincidunt at consectetur
              tristique, scelerisque a risus. Fusce dignissim dui at magna commodo tincidunt.
            </p>
          </section>

          <section className="profile-section">
            <h2 className="profile-heading">Experiences</h2>
            <p>
            {profile.experiences}
            </p>
          </section>

          <section className="profile-section qualifications">
            <h2 className="profile-heading">Qualifications</h2>
            <div className="qualification-container">
              <div className="qualification-box">
                <p>PSLE</p>
                <p>“O” Level</p>
                <p>“A” Level</p>
                <p>Diploma</p>
                <p>Degree</p>
              </div>
              <div className="qualification-details-box">
                <div className='q_detail'>
                  <p><strong>Name of Educational Institution</strong></p>
                  <p>{profile.educationDetails[0].institution}</p>
                </div>
                <div className='q_detail'>
                  <p><strong>Course of Study</strong></p>
                  <p>{profile.educationDetails[0].course}</p>
                </div>
                <div>
                  <p><strong>Grade Point Average</strong></p>
                  <p>{profile.educationDetails[0].gpa} / 5.0</p>
                </div>
              </div>
            </div>
          </section>

          </>
        )}
      </section>
        

      <section className="profile-section">
        {selectedTab === 'LESSON' && (
          <>
            <section className="profile-section">
              <h2 className="profile-heading">Rates</h2>
              <div>
                {profile.levels.map((level, index) => (
                <p key={index} style={{ display: 'block', marginBottom: '5px' }}>
                  {level.name}: {level.rate} (hourly rate)
                </p>
              ))}
              </div>
            </section>

            <section className="profile-section">
              <h2 className="profile-heading">Availablities</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus massa, tincidunt at consectetur tristique, scelerisque a risus.
  
              </p>
            </section>

            <section className="profile-section">
              <h2 className="profile-heading">Locations</h2>
              <div>
              {/* {profile.preferredLocations} */}
              {profile.preferredLocations.map((location, index) => (
                  <p key={index} style={{ display: 'block', marginBottom: '5px' }}>
                    {location}
                  </p>
              ))}
              </div>
            </section>

            <section className="profile-section">
            <h2 className="profile-heading">Levels</h2>
              <div>
                  {profile.levels.map((level, index) => (
                  <p key={index} style={{ display: 'block', marginBottom: '5px' }}>
                    {level.name}
                  </p>
              ))}
              </div>
            </section>

            <section className="profile-section">
            <h2 className="profile-heading">Subjects</h2>
            <div>
              {profile.levels.map((level, index) => (
                <div key={index} style={{ marginBottom: '5px' }}>
                  {level.subjects.length > 0 ? (
                    <>
                      {level.subjects.map((subject, subIndex) => (
                        <p key={subIndex} style={{ marginBottom: '5px' }}>{subject}</p>
                      ))}
                    </>
                  ) : (
                    <p>No subjects listed</p>
                  )}
                </div>
              ))}
            </div>
            </section>

          </>
        
        )}
      </section>

      <section className="profile-section">
        {selectedTab === 'DETAILS' && (
          
          <>
            <section className="profile-section">
              <h2 className="profile-heading">Name</h2>
              <p>
                {profile.firstName} {profile.lastName} 
              </p>
            </section>

            <section className="profile-section">
            <h2 className="profile-heading">Gender</h2>
              <p>
                {profile.gender}
              </p>
            </section>

            <section className="profile-section">
              <h2 className="profile-heading">Tutor Category</h2>
              <p>
                {profile.tutorCategory} 
              </p>
            </section>

            <section className="profile-section">
              <h2 className="profile-heading">education</h2>
              <p>
                {profile.educationDetails[0].institution}   {/*field not available*/}
              </p>
            </section>

            <section className="profile-section">
              <h2 className="profile-heading">Date Joined</h2>
              <p>
                {profile.dateJoined}  {/*field not available*/}
              </p>
            </section>
          
          </>
          
          
        )}
      </section>

      <section className="profile-section">
            {selectedTab === 'REVIEWS' && <Reviews/>}
      </section>


    </div>
  )
}

export default Profile;
