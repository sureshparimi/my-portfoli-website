import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="introduction-heading">
              Let Me <span className="purple">Introduce</span> Myself
            </h1>
            <div className="home-about-body">
              <div className="experience-highlight">
                <p>
                  With over <span className="purple">17 years</span> of experience in Software Testing and Quality Assurance, 
                  I've delivered excellence across diverse domains including 
                  <span className="purple"> Banking & SEPA Payments</span>, 
                  <span className="purple"> Healthcare</span>, 
                  <span className="purple"> Telecom</span>, and 
                  <span className="purple"> Manufacturing</span>.
                </p>
              </div>

              <div className="domain-expertise">
                <h3 className="section-subtitle">Domain Experience</h3>
                <ul className="expertise-list">
                  <li>
                    <span className="purple">▹</span> Banking & Fintech: SEPA Payments (SCT, SDD, SCT Inst), Credit Cards, Payment Gateways
                  </li>
                  <li>
                    <span className="purple">▹</span> Healthcare: Patient Management, Clinical Systems, Healthcare Platforms
                  </li>
                  <li>
                    <span className="purple">▹</span> Telecom: Billing Systems, OSS/BSS, Mobile Applications
                  </li>
                  <li>
                    <span className="purple">▹</span> Enterprise CRM: Salesforce, Siebel CRM, Oracle Apps Integration
                  </li>
                  <li>
                    <span className="purple">▹</span> Manufacturing: Supply Chain, Order Management, CPQ Systems
                  </li>
                </ul>
              </div>

              <div className="expertise-section">
                <h3 className="section-subtitle">Core Expertise</h3>
                <ul className="expertise-list">
                  <li>
                    <span className="purple">▹</span> Test Automation Architecture & Framework Development
                  </li>
                  <li>
                    <span className="purple">▹</span> CI/CD Pipeline Integration & DevOps Practices
                  </li>
                  <li>
                    <span className="purple">▹</span> Performance Testing & Optimization
                  </li>
                  <li>
                    <span className="purple">▹</span> Agile Testing Leadership & Process Improvement
                  </li>
                </ul>
              </div>

              <div className="key-achievements">
                <h3 className="section-subtitle">Recent Achievements</h3>
                <ul className="achievement-list">
                  <li>
                    <span className="purple">▹</span> Led ALM decommissioning at Canon Europe, saving €60,000 within 3 months
                  </li>
                  <li>
                    <span className="purple">▹</span> Automated compliance checks saving 30 hours daily for 10 team members
                  </li>
                  <li>
                    <span className="purple">▹</span> Modernized test automation infrastructure, saving €75,000 annually
                  </li>
                </ul>
              </div>

              <div className="technical-skills">
                <h3 className="section-subtitle">Technical Proficiency</h3>
                <p>
                  I architect and implement test automation frameworks using:
                  <br />
                  <span className="tech-stack">
                    <span className="purple">Python</span> • 
                    <span className="purple">Java</span> • 
                    <span className="purple">JavaScript</span>
                  </span>
                </p>
                <p>
                  Leveraging modern tools:
                  <br />
                  <span className="tech-stack">
                    <span className="purple">Playwright</span> • 
                    <span className="purple">Cypress</span> • 
                    <span className="purple">Selenium</span> • 
                    <span className="purple">Robot Framework</span>
                  </span>
                </p>
              </div>

              <div className="passion-section">
                <h3 className="section-subtitle">Professional Focus</h3>
                <p>
                  My passion centers on:
                  <ul className="focus-list">
                    <li>
                      <span className="purple">▹</span> Building robust testing strategies
                    </li>
                    <li>
                      <span className="purple">▹</span> Implementing shift-left testing culture
                    </li>
                    <li>
                      <span className="purple">▹</span> Comprehensive quality assurance across Web, Mobile, and API platforms
                    </li>
                  </ul>
                </p>
              </div>

              <div className="connect-section">
                <p>
                  <i>
                    <span className="purple">Interested in collaboration? </span>
                    <a 
                      href="https://www.linkedin.com/in/sparimi/"
                      target="_blank"
                      rel="noreferrer"
                      className="connect-link"
                    >
                      Let's connect on LinkedIn
                    </a>
                  </i>
                </p>
                <p>
                  <i>
                    <span className="purple">Let's talk: </span>
                    <a 
                      href="/booking"
                      className="connect-link schedule-link"
                    >
                      Find my schedule here
                    </a>
                  </i>
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="avatar-hover">
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{
                  transform: "scale(1)",
                  transition: "transform 0.3s ease-in-out"
                }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sureshparimi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sparimi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
