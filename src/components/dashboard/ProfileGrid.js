import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard'; // Import the ProfileCard component
import profileService from '../../services/profileService';
import Profile from '../profile/TutorProfile'; // Import the Profile component
import './style/ProfileGrid.css';

const ProfileGrid = ({ onProfileSelect }) => {
  
  const [profiles, setProfiles] = useState([]);
  const [selectedProfileId, setSelectedProfileId] = useState(null); // Track selected profile

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await profileService.getAllProfiles();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);


  
  const handleProfileClick = (profileId) => {
    console.log("Profile clicked:", profileId); // Debug log
    setSelectedProfileId(profileId); // Update selected profile ID
    onProfileSelect('Profile'); // Update selected component to Profile
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
          profilePic={profile.profilePicUrl || `${process.env.PUBLIC_URL}/img/team/01.jpg`} 
          userName={`${profile.firstName} ${profile.lastName}`}
          description={profile.educationLevel}
          isPremium={profile.isPremium}
          onClick={() => onProfileSelect(profile._id)} // Directly call the prop
        />
      ))}
    </div>
  );
};

export default ProfileGrid;
