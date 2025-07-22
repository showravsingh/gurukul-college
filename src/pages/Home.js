import React, { useRef, useEffect, useState } from "react";
import {
  Container,
  Carousel,
  Row,
  Col,
  Card,
  Button,
  Form
} from "react-bootstrap";
import "../App.css";
import slider1 from "../assets/Slider1.jpg";
import slider2 from "../assets/Slider2.jpg";
import slider3 from "../assets/Slider3.jpg";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUserPlus, faSignInAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const courseScrollRef = useRef(null);
const isPausedRef = useRef(false);
const pauseTimeoutRef = useRef(null);

const scrollCourses = (direction) => {
  const container = courseScrollRef.current;
  const scrollAmount = 300;

  if (!container) return;

  // Pause auto-scroll on user interaction
  isPausedRef.current = true;
  clearTimeout(pauseTimeoutRef.current);
  pauseTimeoutRef.current = setTimeout(() => {
    isPausedRef.current = false;
  }, 4000); // Resume after 4 seconds

  container.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth"
  });
};

// Continuous auto scroll
useEffect(() => {
  const container = courseScrollRef.current;
  if (!container) return;

  let animationFrameId;
  const scrollSpeed = 0.5;

  const step = () => {
    if (!isPausedRef.current) {
      container.scrollLeft += scrollSpeed;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
    }
    animationFrameId = requestAnimationFrame(step);
  };

  animationFrameId = requestAnimationFrame(step);
  return () => cancelAnimationFrame(animationFrameId);
}, []);


  const courseList = [
    { title: "Engineering Programs", desc: "Quality education in engineering fields." },
    { title: "Library Facilities", desc: "Access thousands of books and journals." },
    { title: "Online Learning", desc: "Live classes and digital resources." },
    { title: "Science Programs", desc: "Explore labs and practical science." },
    { title: "Arts & Humanities", desc: "Cultural knowledge and creativity." },
    { title: "Management Courses", desc: "Business, marketing, and finance." },
    { title: "Computer Applications", desc: "Programming, software, and tools." },
    { title: "Vocational Training", desc: "Skill-based industry training." },
    { title: "Language Labs", desc: "Communication enhancement tools." }
  ];

  return (
    <React.Fragment>
      <Header />

      {/* 1. Carousel */}
      <Carousel className="mb-5">
        {[slider1, slider2, slider3].map((img, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100 carousel-image" src={img} alt={`Slide ${idx + 1}`} />
            <Carousel.Caption>
              <h3>{["Welcome to Gurukul", "Modern Infrastructure", "Dedicated Faculty"][idx]}</h3>
              <p>
                {["Empowering the next generation of scholars", "Technology + Tradition = Gurukul", "Learn from experienced mentors"][idx]}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* 2. Services Section */}
      <Container>
        <div className="text-center">
  <h2 className="section-title"><FontAwesomeIcon icon={faBookOpen} className="me-2" />
  Courses Offered</h2>
</div>

        <div className="course-scroll-wrapper mb-5">
          <button className="scroll-button left" onClick={() => scrollCourses("left")}>&lt;</button>
          <div className="course-scroll-container" ref={courseScrollRef}>
            <div className="course-marquee">
              {[...courseList, ...courseList.slice(0, 3)].map((course, index) => (
                <Card className="course-card text-center" key={index}>
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.desc}</Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
          <button className="scroll-button right" onClick={() => scrollCourses("right")}>&gt;</button>
        </div>

        {/* 3. Student Registration */}
        <div className="text-center">
  <h2 className="section-title"><FontAwesomeIcon icon={faUserPlus} className="me-2" />Student Registration</h2>
</div>
        <div className="section-wrapper">
        <Form className="mb-5 mx-auto" style={{ maxWidth: "800px" }}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Course</Form.Label>
                <Form.Select>
                  <option>Select course</option>
                  <option>Computer Science</option>
                  <option>Mechanical</option>
                  <option>Civil</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="success" type="submit">Register</Button>
          </div>
        </Form>
</div>
        {/* 4. Student Login */}
        <div className="text-center">
  <h2 className="section-title"><FontAwesomeIcon icon={faSignInAlt} className="me-2" />Student Login</h2>
</div>
        <div className="section-wrapper">
        <Form className="mb-5 mx-auto" style={{ maxWidth: "500px" }}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">Login</Button>
          </div>
        </Form>
</div>
        {/* 5. About Section */}
        <div className="text-center">
  <h2 className="section-title"><FontAwesomeIcon icon={faGraduationCap} className="me-2" />About Gurukul</h2>
</div>
        <div id="about-section" className="mx-auto text-center" style={{ maxWidth: "1200px" }}>
  Gurukul is a modern educational institute blending ancient wisdom with modern technology.
  We provide affordable, high-quality education in an environment that fosters creativity, research,
  and holistic development...
</div>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
