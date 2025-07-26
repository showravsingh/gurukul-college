import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const EditStudent = () => {
  const [inputId, setInputId] = useState('');
  const [student, setStudent] = useState(null);
  const [updatedStudent, setUpdatedStudent] = useState(null);

  const handleFetch = async () => {
    if (!inputId) return alert('Please enter a student ID');

    try {
      const response = await axios.get(`http://localhost/StudentManagementSystem/api/student/${inputId}`);
      setStudent(response.data);
      setUpdatedStudent(null); // clear previous update result
    } catch (error) {
      console.error('Error fetching student:', error);
      alert('Failed to fetch student data');
      setStudent(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!student || !student.id) {
      alert('No student selected');
      return;
    }

    try {
      const res = await axios.put(
        `http://localhost/StudentManagementSystem/api/student/${student.id}`,
        student,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (res.status === 200) {
        alert('Student updated successfully!');
        setUpdatedStudent(res.data);
      } else {
        alert('Failed to update student.');
      }
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Error occurred during update.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Student</h2>

      {/* Student ID Input */}
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
            <Button variant="primary" onClick={handleFetch}>Fetch Student</Button>
          </Col>
        </Row>
      </Form>

      {/* Editable Form */}
      {student && (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  name="gender"
                  value={student.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="TRANSGENDER">Transgender</option>
                  <option value="NOT_DISCLOSED">Others</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Course</Form.Label>
                <Form.Select
                  name="course"
                  value={student.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select course</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Java Full Stack">Java Full Stack</option>
                  <option value="Python + Django">Python + Django</option>
                  <option value="Java Advance + MicroServices">Java Advance + MicroServices</option>
                  <option value="MERN Full Stack">MERN Full Stack</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" type="submit">Update</Button>
        </Form>
      )}

      {/* Updated Result Display */}
      {updatedStudent && (
        <div className="mt-5">
          <h4>Updated Student Details</h4>
          <div className="card shadow-sm">
            <div className="card-body">
              <p><strong>ID:</strong> {updatedStudent.id}</p>
              <p><strong>Name:</strong> {updatedStudent.name}</p>
              <p><strong>Email:</strong> {updatedStudent.email}</p>
              <p><strong>Gender:</strong> {updatedStudent.gender}</p>
              <p><strong>Course:</strong> {updatedStudent.course}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditStudent;
