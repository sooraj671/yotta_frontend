import React from 'react';
import ProfileCard from './ProfileCard'; // Import the ProfileCard component
import './style/ProfileGrid.css';

const ProfileGrid = () => {
  // Example profiles data
  const profiles = [
    {
      profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
      userName: 'Jane Doe',
      description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
      isPremium: true,
    },
    {
      profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
      userName: 'John Smith',
      description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
      isPremium: false,
    },
    {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'Jane Doe',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: true,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'John Smith',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: false,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'Jane Doe',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: true,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'John Smith',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: false,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'Jane Doe',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: true,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'John Smith',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: false,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'Jane Doe',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: true,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'John Smith',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: false,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'Jane Doe',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: true,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'John Smith',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: false,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'Jane Doe',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: true,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'John Smith',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: false,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'Jane Doe',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: true,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'John Smith',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: false,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'Jane Doe',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: true,
      },
      {
        profilePic: `${process.env.PUBLIC_URL}/img/team/01.jpg`,
        userName: 'John Smith',
        description: 'I am a passionate mobile app developer with experience in Flutter and React Native. I love creating user-friendly apps and delivering quality code.',
        isPremium: false,
      },
    // Add more profile objects as needed
  ];

  return (
    <div className="profile-grid">
      {profiles.map((profile, index) => (
        <ProfileCard 
          key={index}
          profilePic={profile.profilePic}
          userName={profile.userName}
          description={profile.description}
          isPremium={profile.isPremium}
        />
      ))}
    </div>
  );
};

export default ProfileGrid;
