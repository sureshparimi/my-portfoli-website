import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaTools } from "react-icons/fa";

function Resources() {
  return (
    <Container fluid className="resources-section">
      <Particle />
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <div className="construction-message">
              <FaTools className="construction-icon" />
              <h1 className="project-heading">
                Under <strong className="purple">Construction </strong>
              </h1>
              <p className="construction-text">
                This section is currently being built. Check back soon!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resources; 