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
              {/* Professional Summary */}
              <div className="experience-highlight">
                <p>
                  A seasoned <span className="purple">Software Engineering Lead</span> with over 
                  <span className="purple"> 17 years</span> of experience in Quality Engineering 
                  and Test Automation. I specialize in building robust testing frameworks and 
                  leading high-performing engineering teams across diverse domains.
                </p>
              </div>

              {/* Domain Expertise */}
              <div className="domain-expertise">
                <h3 className="section-subtitle">Industry Experience</h3>
                <ul className="expertise-list">
                  <li>
                    <span className="purple">▹</span> 
                    <strong>Banking & Fintech:</strong> Led SEPA payments testing (SCT, SDD, SCT Inst) at ABN AMRO, 
                    ensuring compliance and integration quality
                  </li>
                  <li>
                    <span className="purple">▹</span> 
                    <strong>Enterprise Solutions:</strong> Managed CRM and Finance testing at Canon Europe, 
                    focusing on Salesforce, Oracle, and CPQ systems
                  </li>
                  <li>
                    <span className="purple">▹</span> 
                    <strong>Healthcare & Pharma:</strong> Delivered test automation solutions for Pfizer's 
                    clinical and patient management systems
                  </li>
                  <li>
                    <span className="purple">▹</span> 
                    <strong>Telecom & Infrastructure:</strong> Implemented quality frameworks for T-Mobile's 
                    billing and OSS/BSS systems
                  </li>
                </ul>
              </div>

              {/* Key Achievements */}
              <div className="achievements-section">
                <h3 className="section-subtitle">Recent Impact</h3>
                <ul className="achievement-list">
                  <li>
                    <span className="purple">▹</span> 
                    Modernized test automation infrastructure, resulting in <strong>€75,000 annual savings</strong>
                  </li>
                  <li>
                    <span className="purple">▹</span> 
                    Led ALM decommissioning project, saving <strong>€60,000 within 3 months</strong>
                  </li>
                  <li>
                    <span className="purple">▹</span> 
                    Automated compliance audit processes using <strong>JIRA REST API</strong>, <strong>Python</strong>, 
                    and <strong>Streamlit</strong>
                  </li>
                </ul>
              </div>

              {/* Skills Section */}
              <div className="skills-section">
                <h3 className="section-subtitle">Technical Skills</h3>
                <a href="/about" className="skills-link-box">
                  <div className="skills-link-content">
                    <span className="purple">View technical skills</span>
                    <span className="skills-arrow">→</span>
                  </div>
                  <div className="skills-hint">Click to explore my technical expertise</div>
                </a>
              </div>

              {/* Professional Focus */}
              <div className="focus-section">
                <h3 className="section-subtitle">Current Focus</h3>
                <ul className="focus-list">
                  <li>
                    <span className="purple">▹</span> Building scalable test automation architectures
                  </li>
                  <li>
                    <span className="purple">▹</span> Implementing shift-left testing practices
                  </li>
                  <li>
                    <span className="purple">▹</span> Mentoring and growing engineering teams
                  </li>
                </ul>
              </div>

              {/* Connect Section */}
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
