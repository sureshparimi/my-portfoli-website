import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Get In <strong className="purple">Touch </strong>
        </h1>
        <Row className="contact-content">
          <Col md={12} className="contact-links">
            <div className="contact-card">
              <a
                href="https://linkedin.com/in/sparimi"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FaLinkedin className="contact-icon" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div className="contact-card">
              <a
                href="https://github.com/sureshparimi"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FaGithub className="contact-icon" />
                <span>GitHub Profile</span>
              </a>
            </div>

            <div className="contact-card">
              <a
                href="mailto:reachparimi@gmail.com"
                className="contact-link"
              >
                <MdEmail className="contact-icon" />
                <span>reachparimi@gmail.com</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact; 