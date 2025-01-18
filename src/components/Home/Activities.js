import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLeaf, FaLaptopCode, FaPlane } from "react-icons/fa";

function Activities() {
  return (
    <Container fluid className="activities-section">
      <Container>
        <Row className="activities-list">
          <Col md={4} className="activity-card">
            <FaLeaf className="activity-icon" />
            <h3>Minimalist Lifestyle</h3>
            <p>Embracing simplicity and mindful living</p>
          </Col>
          <Col md={4} className="activity-card">
            <FaLaptopCode className="activity-icon" />
            <h3>Learning & Cooking</h3>
            <p>Exploring new technologies and culinary adventures</p>
          </Col>
          <Col md={4} className="activity-card">
            <FaPlane className="activity-icon" />
            <h3>Travelling</h3>
            <p>Discovering new places and cultures</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Activities; 