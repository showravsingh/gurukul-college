import React, { useState } from 'react';
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';
import axios from 'axios';

const RemoveStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [status, setStatus] = useState(null); // success or error message

  const handleDelete = async () => {
    if (!studentId) {
      alert('Please enter a student ID');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost/StudentManagementSystem/api/student`, {
  params: { id: studentId },
});

      if (response.status === 200) {
        setStatus({ type: 'success', message: `Student with ID ${studentId} deleted successfully.` });
      } else {
        setStatus({ type: 'danger', message: 'Failed to delete student. Please try again.' });
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      setStatus({ type: 'danger', message: 'Student not found or server error.' });
    }

    setStudentId('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Remove Student</h2>

      {/* Input Form */}
      <Form>
        <Row className="align-items-end">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Enter Student ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button variant="danger" onClick={handleDelete}>
              Delete Student
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Result Message */}
      {status && (
        <Alert variant={status.type} className="mt-4">
          {status.message}
        </Alert>
      )}
    </div>
  );
};

export default RemoveStudent;
