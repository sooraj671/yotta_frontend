import ProfileCard from './ProfileCard'; // Import the ProfileCard component
import React, { useEffect, useState } from 'react';
import profileService from '../../services/profileService';
import './style/ProfileGrid.css';

const ProfileGrid = () => {
  const [profiles, setProfiles] = useState([]);

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
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className="profile-grid">
      {profiles.map((profile, index) => (
        <ProfileCard 
          key={index}
          profilePic={profile.profilePicUrl || `${process.env.PUBLIC_URL}/img/team/01.jpg`} // Fallback image
          userName={profile.firstName + ' ' + profile.lastName}
          description={profile.bio || 'No description available.'} // Assuming you have a bio field
          isPremium={profile.isPremium} // Change as per your data structure
        />
      ))}
    </div>
  );
};

export default ProfileGrid;
