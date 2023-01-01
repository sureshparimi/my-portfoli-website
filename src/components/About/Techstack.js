import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
           <p style={{ textAlign: "justify" }}>
            <span className="white">Python </span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">JavaScript </span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">Java</span>
            </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p style={{ textAlign: "justify" }}>
            <span className="white">CI/CD</span>
            </p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
