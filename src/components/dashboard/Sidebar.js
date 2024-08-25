import React from 'react';
import './style/Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: '🏢', label: 'Co.' },
    { icon: '👤', label: 'Account' },
    { icon: '🔍', label: 'Find Tutor' },
    { icon: '📚', label: 'Resources' },
    { icon: '🌐', label: 'Community' },
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div key={index} className="sidebar-item">
          <div className="sidebar-icon">{item.icon}</div>
          <div className="sidebar-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
