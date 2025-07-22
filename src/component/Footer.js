import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";
import "../App.css";
import logo from "../assets/logo.png"; 

const Footer = () =>{
    return (
        <React.Fragment>
             <footer className="bg-dark text-light pt-4 mt-5">
      <Container>
        <Row className="align-items-center mb-4 text-center text-md-start">
          <Col md={3} className="mb-3 mb-md-0">
            <img src={logo} alt="Gurukul Logo" style={{ width: "150px" }} />
          </Col>

          <Col md={5}>
            <h5>Gurukul Institute</h5>
            <p>
              Address: 123, Knowledge Avenue, Education City, India<br />
              Phone: +91-9876543210<br />
              Email: info@gurukul.edu.in
            </p>
          </Col>

          <Col md={4} className="text-md-end">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 justify-content-md-end justify-content-center mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center pb-3">
            <small>© {new Date().getFullYear()} Gurukul Institute. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
        </React.Fragment>
    )
        
}
export default Footer;