import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <Container className="my-5">
        {/* Page Heading */}
        <h2 className="text-center mb-4">Get in Touch</h2>

        {/* Contact Info Section */}
        <Row className="mb-5">
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5>Our Address</h5>
                <p>
                  Gurukul Institute<br />
                  Knowledge Park, Sector 10<br />
                  Noida, Uttar Pradesh - 201301<br />
                  India
                </p>

                <h5>Email</h5>
                <p>info@gurukulinstitute.edu.in</p>

                <h5>Phone</h5>
                <p>+91 9876543210</p>

                <h5>Working Hours</h5>
                <p>Mon - Sat: 9:00 AM to 5:30 PM</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <h5>Send Us a Message</h5>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Your full name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit">Send Message</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Optional: Google Map Embed */}
        <h3 className="text-center mb-3">Find Us on Map</h3>
        <div className="mb-5" style={{ border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
          <iframe
            title="Gurukul Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.676626263401!2d77.39102607485768!3d28.489310275748716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce79079cbf2d7%3A0xd8fcff7f0dbe6c03!2sKnowledge%20Park%2C%20Noida!5e0!3m2!1sen!2sin!4v1624027892090!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
