import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import aboutImg from "../assets/about-campus.jpeg"; 

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <Container className="my-5">
        <h2 className="text-center mb-4">About Gurukul Institute</h2>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Image src={aboutImg} alt="Gurukul Campus" fluid rounded />
          </Col>
          <Col md={6}>
            <p>
              Gurukul Institute is a modern educational hub rooted in ancient Indian educational philosophy.
              Our mission is to blend traditional values with 21st-century learning, making education both meaningful and practical.
            </p>
            <p>
              With a commitment to holistic development, Gurukul emphasizes academic excellence, character building,
              and technological innovation. Our students are nurtured to become not just professionals, but responsible citizens and leaders.
            </p>
          </Col>
        </Row>

        <h3 className="text-center mb-4">Why Choose Gurukul?</h3>
        <Row className="g-4">
          {[
            {
              title: "Experienced Faculty",
              desc: "Learn from highly qualified and experienced mentors."
            },
            {
              title: "Modern Infrastructure",
              desc: "Smart classrooms, digital labs, and eco-friendly campus."
            },
            {
              title: "Student-Centered Learning",
              desc: "Focus on individual growth through mentoring and support."
            },
            {
              title: "Career Guidance",
              desc: "Dedicated placement and career counseling cell."
            }
          ].map((feature, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.desc}</Card.Text>
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

export default About;
