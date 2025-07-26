import React, { useState } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';
import axios from 'axios';

const GetSingleStudent = () => {
  const [inputId, setInputId] = useState('');
  const [student, setStudent] = useState(null);

  const handleFetch = async () => {
    if (!inputId) return alert('Please enter a student ID');

    try {
      const response = await axios.get(`http://localhost/StudentManagementSystem/api/student/${inputId}`);
      setStudent(response.data);
    } catch (error) {
      console.error('Error fetching student:', error);
      alert('Student not found or server error');
      setStudent(null);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Get Student Details</h2>

      {/* ID Input Form */}
      <Form className="mb-4">
        <Row className="align-items-end">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Enter Student ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Student ID"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button variant="primary" onClick={handleFetch}>
              Fetch Student
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Display Student Details */}
      {student && (
        <Card className="shadow-sm">
          <Card.Body>
            <h4 className="mb-3">Student Info</h4>
            <p><strong>ID:</strong> {student.id}</p>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Course:</strong> {student.course}</p>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default GetSingleStudent;
