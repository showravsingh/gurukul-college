import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faLaptopCode,
  faBook,
  faMicroscope,
  faPalette,
  faBriefcase,
  faLanguage,
  faTools
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  const services = [
    {
      title: "Engineering Programs",
      desc: "Quality technical education in various engineering fields.",
      icon: faChalkboardTeacher
    },
    {
      title: "Online Learning",
      desc: "Flexible, remote classes with digital resources and live faculty.",
      icon: faLaptopCode
    },
    {
      title: "Library Access",
      desc: "Thousands of books, research papers, and digital materials.",
      icon: faBook
    },
    {
      title: "Science Labs",
      desc: "Advanced labs for practical experiments and research.",
      icon: faMicroscope
    },
    {
      title: "Arts & Humanities",
      desc: "Courses promoting creativity, literature, and culture.",
      icon: faPalette
    },
    {
      title: "Management Studies",
      desc: "Business, finance, and marketing programs.",
      icon: faBriefcase
    },
    {
      title: "Language Labs",
      desc: "Modern tools for learning and enhancing communication skills.",
      icon: faLanguage
    },
    {
      title: "Vocational Training",
      desc: "Industry-oriented skill development programs.",
      icon: faTools
    }
  ];

  return (
    <React.Fragment>
      <Header />
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <p className="text-center mb-5">
          Gurukul Institute offers a wide range of educational services tailored to modern industry standards and traditional learning values.
        </p>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm text-center">
                <Card.Body>
                  <div className="mb-3">
                    <FontAwesomeIcon icon={service.icon} size="3x" className="text-primary" />
                  </div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Service;
