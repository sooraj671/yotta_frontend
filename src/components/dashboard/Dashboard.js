import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import SubjectButtons from './SubjectButtons';
import ProfileGrid from './ProfileGrid';
import Resources from './Resources';
import { Container, Row, Col } from 'react-bootstrap';
import './style/Dashboard.css';

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('ProfileGrid');
  const [role, setRole] = useState('tutor'); // Mock role, could be 'student', 'parent', or 'tutor'

  const handleSelection = (selection) => {
    setSelectedComponent(selection);
  };

  const renderMainContent = () => {
    switch (selectedComponent) {
      case 'Resources':
        return <Resources role={role} />;
      case 'ProfileGrid':
      default:
        return <ProfileGrid />;
    }
  };

  return (
    <Container fluid className="dashboard">
      <Row>
        <Col md={3}>
          <Sidebar onSelect={handleSelection} />
        </Col>
        <Col md={9}>
          <TopBar />
          <SubjectButtons />
          {renderMainContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
