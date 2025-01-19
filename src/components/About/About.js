import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { FaHandSparkles } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Hey There{" "}
              <span className="wave-hand">
                <FaHandSparkles className="wave-icon" />
              </span>
            </h1>
            <p className="home-about-body">
              I am <span className="purple">Suresh Parimi</span> from{" "}
              <span className="purple">Amsterdam, The Netherlands</span>
            </p>
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <span>Selenium</span>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <span>Cypress</span>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <span>Playwright</span>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <span>RestAssured</span>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <span>Appium</span>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
