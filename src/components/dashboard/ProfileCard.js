import React from 'react';
import './style/ProfileCard.css'; // Import CSS for styling

const ProfileCard = ({ profilePic, userName, description, isPremium, onClick }) => { // Add onClick as a prop
  return (
    <div className="profile-card" onClick={onClick}> {/* Add the onClick handler */}
      <div className="profile-card-header">
        <img src={profilePic} alt={userName} className="profile-card-pic" />
        <div className="profile-card-name-container">
          <h3 className="profile-card-name">{userName}</h3>
          {isPremium && <span className="premium-icon">⭐</span>}
        </div>
      </div>
      <p className="profile-card-description">{description}</p>
    </div>
  );
};

export default ProfileCard;
