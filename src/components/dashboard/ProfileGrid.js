import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard'; // Import the ProfileCard component
import profileService from '../../services/profileService';
import Profile from '../profile/TutorProfile'; // Import the Profile component
import './style/ProfileGrid.css';

const ProfileGrid = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfileId, setSelectedProfileId] = useState(null); // Track selected profile

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await profileService.getAllProfiles();
        setProfiles(data); // Update state with fetched profiles
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  const handleProfileClick = (profileId) => {
    console.log(profileId);
    setSelectedProfileId(profileId); // Update state with clicked profile ID
  };

  // Conditionally render the Profile component if a profile is selected
  if (selectedProfileId) {
    return <Profile profileId={selectedProfileId} />;
  }

  return (
    <div className="profile-grid">
      {profiles.map((profile, index) => (
        <ProfileCard 
          key={index}
          profilePic={profile.profilePicUrl || `${process.env.PUBLIC_URL}/img/team/01.jpg`} // Fallback image
          userName={profile.firstName + ' ' + profile.lastName}
          description={profile.educationLevel} // Assuming you have a bio field
          isPremium={profile.isPremium} // Change as per your data structure
          onClick={() => handleProfileClick(profile._id)} // Handle card click
        />
      ))}
    </div>
  );
};

export default ProfileGrid;
