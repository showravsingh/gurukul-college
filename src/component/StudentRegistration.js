import React, { useState } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const StudentRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [gender, setGender] = useState('');
  const [registeredStudent, setRegisteredStudent] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = { name, email, course, gender };

    try {
      const response = await axios.post(
        'http://localhost/StudentManagementSystem/api/student',
        student
      );

      setRegisteredStudent(response.data);
      alert('Student registered successfully!');

      // Clear form fields after registration
      setName('');
      setEmail('');
      setCourse('');
      setGender('');
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering student');
    }
  };

  return (
    <div className="mt-3">
      <div className="text-center">
        <h2 className="section-title">
          <FontAwesomeIcon icon={faUserPlus} className="me-2" />
          Student Registration
        </h2>
      </div>
      <div className="section-wrapper">
        <Form
          onSubmit={handleSubmit}
          className="mb-5 mx-auto"
          style={{ maxWidth: '800px' }}
        >
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
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
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                >
                  <option value="">Select course</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Java Full Stack">Java Full Stack</option>
                  <option value="Python + Django">Python + Django</option>
                  <option value="Java Advance + MicroServices">
                    Java Advance + MicroServices
                  </option>
                  <option value="MERN Full Stack">MERN Full Stack</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="success" type="submit">
              Register
            </Button>
          </div>
        </Form>

        {registeredStudent && (
          <Card
            className="mx-auto"
            style={{ maxWidth: '600px', backgroundColor: '#e9f7ef' }}
          >
            <Card.Header className="text-center text-success">
              <FontAwesomeIcon icon={faCheckCircle} /> Registration Successful!
            </Card.Header>
            <Card.Body>
              <Card.Title>{registeredStudent.name}</Card.Title>
              <Card.Text>
                <strong>ID:</strong> {registeredStudent.id}
                <br />
                <strong>Email:</strong> {registeredStudent.email}
                <br />
                <strong>Gender:</strong> {registeredStudent.gender}
                <br />
                <strong>Course:</strong> {registeredStudent.course}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StudentRegistration;
