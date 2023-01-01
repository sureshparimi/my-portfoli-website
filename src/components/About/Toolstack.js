import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">Pytest</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">Behave</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">Cypress</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">Selenium</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">Appium</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">Postman/Newman</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">Jira</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">Azure Devops</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">Github Actions</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">GitLab</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">AWS</span>
            </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
