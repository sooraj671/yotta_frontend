import React from 'react';
import './style/Sidebar.css';

const Sidebar = ({ onSelect }) => { // Accept onSelect as a prop
  const menuItems = [
    { icon: '🏢', label: 'Co.', value: 'ProfileGrid' },
    { icon: '👤', label: 'Account', value: 'ProfileGrid' },
    { icon: '🔍', label: 'Find Tutor', value: 'ProfileGrid' },
    { icon: '📚', label: 'Resources', value: 'Resources' },
    { icon: '🌐', label: 'Community', value: 'ProfileGrid' },
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div 
          key={index} 
          className="sidebar-item" 
          onClick={() => onSelect(item.value)} // Pass selected value to Dashboard
        >
          <div className="sidebar-icon">{item.icon}</div>
          <div className="sidebar-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
