import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import SubjectButtons from './SubjectButtons';
import ProfileGrid from './ProfileGrid';
import Profile from '../profile/TutorProfile'; // Import the Profile component
import Resources from './Resources';
import QuestionsList from './QuestionsList';
import { Container, Row, Col } from 'react-bootstrap';
import './style/Dashboard.css';

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('ProfileGrid');
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [role, setRole] = useState('parent');

  const handleSelection = (selection) => {
    setSelectedComponent(selection);
    if (selection !== 'ProfileGrid') {
      setSelectedProfileId(null); // Reset the profile ID if not on ProfileGrid
    }
  };

  const handleProfileSelect = (profileId) => {
    setSelectedProfileId(profileId);
    setSelectedComponent('Profile'); // Update the selected component to Profile
  };

  const renderMainContent = () => {
    if (selectedComponent === 'Profile') {
      return <Profile profileId={selectedProfileId} />;
    }

    switch (selectedComponent) {
      case 'Resources':
        return <Resources role={role} />;
      case 'Community':
        return <QuestionsList loggedInUser={"sooraj"} />;
      case 'ProfileGrid':
      case 'Find Tutor':
      case 'Co.':
      default:
        return <ProfileGrid onProfileSelect={handleProfileSelect} />;
    }
  };

  return (
    <Container fluid className="dashboard">
      <Row>
        <Col xs={2} className="sidebar">
          <Sidebar onSelect={handleSelection} />
        </Col>
        <Col xs={10} className="main-content">
          <TopBar />
          <SubjectButtons />
          {renderMainContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
