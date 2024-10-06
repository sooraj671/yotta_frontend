import React, { useState, useEffect } from 'react';
import { Button, Table, Form, Container, Row, Col } from 'react-bootstrap';
import { fetchDocumentUrls, uploadDocument } from '../../services/documentService'; // Import the document service

const Resources = ({ role }) => {
  const [newDocument, setNewDocument] = useState(null); // To store the new document (for tutors)
  const [documentUrls, setDocumentUrls] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  // Fetch document URLs from the service
  useEffect(() => {
    const getDocuments = async () => {
      try {
        setLoading(true);
        const urls = await fetchDocumentUrls(); // Use the service to fetch document URLs
        setDocumentUrls(urls);
      } catch (err) {
        setError('Failed to fetch document URLs.');
      } finally {
        setLoading(false);
      }
    };

    if (role === 'student' || role === 'parent') {
      getDocuments(); // Fetch documents if the role is student or parent
    } else {
      setLoading(false);
    }
  }, [role]);

  // Function to handle document upload (for tutors)
  const handleDocumentUpload = (e) => {
    const file = e.target.files[0]; // Grab the first file from input
    if (file) {
      setNewDocument(file); // Store the uploaded document
      console.log("File selected:", file.name); // Logging file name for debugging
    } else {
      console.log("No file selected");
    }
  };

  // Function to handle document submission (for tutors)
  const handleSubmit = async () => {
    if (newDocument) {
        // Submit the form data and files
      const data = new FormData();
      data.append('document', newDocument);        
      console.log('Uploading document:', newDocument.name);

      try {
        const response = await uploadDocument(data); // Call uploadDocument service
        if (response.status === 201) {
          console.log('Document uploaded successfully');
          alert('Document uploaded successfully');
        } else {
          console.error('Failed to upload document');
          alert('Failed to upload document');
        }
      } catch (err) {
        console.error('Error uploading document:', err);
        alert(err);
      }
    } else {
      console.log('No document to upload');
      alert('Please select a document to upload');
    }
  };

  return (
    <Container className="mt-5">
      {loading ? (
        <p>Loading documents...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : role === 'student' || role === 'parent' ? (
        <div>
          <h2 className="mb-4 text-center">Your Documents</h2>
          {documentUrls.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Document URL</th>
                </tr>
              </thead>
              <tbody>
                {documentUrls.map((url, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <a href={url} download>
                        {url.split('/').pop()} {/* Extract the file name from the URL */}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-center">No documents available.</p>
          )}
        </div>
      ) : role === 'tutor' ? (
        <div>
          <h2 className="mb-4 text-center">Upload New Document</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Choose Document</Form.Label>
                  <Form.Control type="file" onChange={handleDocumentUpload} />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit} className="w-100">
                  Upload
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      ) : (
        <p className="text-center">Invalid role</p>
      )}
    </Container>
  );
};

export default Resources;
