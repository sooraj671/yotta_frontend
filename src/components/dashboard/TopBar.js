import React from 'react';
import './style/TopBar.css';

const TopBar = ({role}) => {
  
  const userName = role; // Replace with dynamic data as needed
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div className="top-bar">
      <div className="user-info">
        <span><b>{userName}</b></span>
        <span>{date}, {time}</span>
      </div>
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="top-icons">
        <span className="top-icon">🔔</span>
        <span className="top-icon">📥</span>
        <span className="top-icon">❤️</span>
      </div>
    </div>
  );
};

export default TopBar;
