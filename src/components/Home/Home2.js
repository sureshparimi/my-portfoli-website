import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              With over 17 years of experience in Software Testing and Quality Assurance, 
              I've mastered the art of delivering quality software.
              <br />
              <br />
              My expertise spans across
              <i>
                <b className="purple"> Test Automation, Release Management, and Quality Engineering Leadership. </b>
              </i>
              <br />
              <br />
              I specialize in building and optimizing test automation frameworks using &nbsp;
              <i>
                <b className="purple">Python, Java, and JavaScript </b> with tools like {" "}
                <b className="purple">
                  Playwright, Cypress, Selenium, and Robot Framework.
                </b>
              </i>
              <br />
              <br />
              My passion lies in implementing 
              <i>
                <b className="purple"> robust testing strategies </b> and fostering a {" "}
                <b className="purple">
                  shift-left testing culture
                </b>
              </i>
              <br />
              <br />
              I bring extensive experience in &nbsp;
              <b className="purple">Web, Mobile, and API Testing</b>, ensuring comprehensive 
              quality across all aspects of software delivery.
              <br />
              <br />
              <i>
                <b className="purple">Want to know more about my professional journey? </b>
                <a 
                  href="https://www.linkedin.com/in/sparimi/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#c770f0", textDecoration: "none" }}
                >
                  Click here to connect on LinkedIn
                </a>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
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
                  href="https://twitter.com/amsterdamps"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
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
