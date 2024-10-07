import React from 'react';
import './style/Sidebar.css';

const Sidebar = ({ onSelect }) => {
  const menuItems = [
    { icon: '🏢', label: 'Co.', value: 'ProfileGrid' },
    { icon: '👤', label: 'Account', value: 'ProfileGrid' },
    { icon: '🔍', label: 'Find Tutor', value: 'ProfileGrid' },
    { icon: '📚', label: 'Resources', value: 'Resources' },
    { icon: '🌐', label: 'Community', value: 'Community' }, // Ensure value matches 'Community'
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div 
          key={index} 
          className="sidebar-item" 
          onClick={() => onSelect(item.value)}
        >
          <div className="sidebar-icon">{item.icon}</div>
          <div className="sidebar-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
