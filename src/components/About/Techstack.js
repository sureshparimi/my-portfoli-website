import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={4} className="tech-icons">
        <p style={{ textAlign: "center", fontSize: "0.9em" }}>
          <span className="white">Test Management</span>
        </p>
      </Col>
      
      <Col xs={4} md={4} className="tech-icons">
        <p style={{ textAlign: "center", fontSize: "0.9em" }}>
          <span className="white">Release Management</span>
        </p>
      </Col>
      
      <Col xs={4} md={4} className="tech-icons">
        <p style={{ textAlign: "center", fontSize: "0.9em" }}>
          <span className="white">Automation Test Consulting</span>
        </p>
      </Col>
      
      <Col xs={4} md={4} className="tech-icons">
        <p style={{ textAlign: "center", fontSize: "0.9em" }}>
          <span className="white">Web, Mobile & API Testing</span>
        </p>
      </Col>
      
      <Col xs={4} md={4} className="tech-icons">
        <p style={{ textAlign: "center", fontSize: "0.9em" }}>
          <span className="white">Telecom Domain</span>
        </p>
      </Col>
      
      <Col xs={4} md={4} className="tech-icons">
        <p style={{ textAlign: "center", fontSize: "0.9em" }}>
          <span className="white">Healthcare Domain</span>
        </p>
      </Col>
      
      <Col xs={4} md={4} className="tech-icons">
        <p style={{ textAlign: "center", fontSize: "0.9em" }}>
          <span className="white">Test Strategy</span>
        </p>
      </Col>
      
      <Col xs={4} md={4} className="tech-icons">
        <p style={{ textAlign: "center", fontSize: "0.9em" }}>
          <span className="white">CI/CD</span>
        </p>
      </Col>
    </Row>
  );
}

export default Techstack;
