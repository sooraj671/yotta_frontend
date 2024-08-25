import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import SubjectButtons from './SubjectButtons';
import ProfileGrid from './ProfileGrid';
import './style/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <SubjectButtons />
        <ProfileGrid />
      </div>
    </div>
  );
};

export default Dashboard;
