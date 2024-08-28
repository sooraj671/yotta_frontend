import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const FormDataDisplay = ({ formData, prevStep, nextStep }) => {
  const renderListItem = (label, value) => (
    <ListGroup.Item>
      <strong>{label}:</strong> {value || "N/A"}
    </ListGroup.Item>
  );

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Review Your Details</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Header as="h5">Personal Information</Card.Header>
            <ListGroup variant="flush">
              {renderListItem("Email", formData.email)}
              {renderListItem("Username", formData.username)}
              {renderListItem("First Name", formData.firstName)}
              {renderListItem("Last Name", formData.lastName)}
              {renderListItem("Phone Number", formData.phoneNumber)}
              {renderListItem("Postal Code", formData.postalCode)}
            </ListGroup>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Header as="h5">Student Information</Card.Header>
            <ListGroup variant="flush">
              {renderListItem(
                "Student's First Name",
                formData.studentFirstName
              )}
              {renderListItem("Student's Last Name", formData.studentLastName)}
              {renderListItem("Student's Gender", formData.studentGender)}
              {renderListItem("Student's Level", formData.studentLevel)}
              {renderListItem("Student's Grade", formData.studentGrade)}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Header as="h5">Tuition Details</Card.Header>
            <ListGroup variant="flush">
              {renderListItem("Lessons Per Week", formData.lessonsPerWeek)}
              {renderListItem("Tuition Budget", formData.tuitionBudget)}
              {renderListItem("Commitment Length", formData.commitmentLength)}
              {renderListItem(
                "Tutor Gender Preference",
                formData.tutorGenderPreference
              )}
              {renderListItem(
                "Preferred Start Date",
                formData.preferredStartDate
              )}
            </ListGroup>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Header as="h5">Additional Information</Card.Header>
            <Card.Body>
              <Card.Text>
                <strong>Terms Accepted:</strong>{" "}
                {formData.termsAccepted ? "Yes" : "No"}
              </Card.Text>
              {formData.expectations && (
                <>
                  <Card.Title>Expectations and Special Needs:</Card.Title>
                  <Card.Text>{formData.expectations}</Card.Text>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FormDataDisplay;
