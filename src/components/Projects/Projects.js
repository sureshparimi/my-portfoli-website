import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/RFW.jpg";
import emotion from "../../Assets/Projects/behave.jpg";
import editor from "../../Assets/Projects/BDD-scenarios.jpg";
import chatify from "../../Assets/Projects/Cypress-BDD.jpg";
import suicide from "../../Assets/Projects/postman.jpg";
import bitsOfCode from "../../Assets/Projects/pytestImage.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cypress Automation Test Framework for Web Application"
              description="This home assignment involves creating a framework that utilizes Cypress, JavaScript, and the Page Object Model to ensure scalability and maintainability. The framework, which has been built using Cypress, BDD, and the Page Object Model, is intended to be easily scalable and maintainable. It can be run across various test environments, such as development, staging, and production"
              ghLink="https://github.com/sureshparimi/Lodgify-Assignment"
              ApplicationTested="www.Lodgify.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pytest-BDD-UI&API- Automation Testing Framework"
              description="I enhanced and maintained this existing framework in a project to make it easier for teams to scale and maintain.Implemented for a major pharma client during Pandemic."
              ghLink="https://github.com/sureshparimi/edn-test-automation-tests-ui"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Test Cases - BDD approach"
              description="This repository maintains the test scenarios written by me in Ghekrin Language(BDD format). I helped a Malta based client in reshaping their automation framework and testing process in agile using BDD approach."
              ghLink="https://github.com/sureshparimi/bdd-gherkin-test-cases/blob/main/bdd-test-cases.feature"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Robot Framework - UI automation"
              description="Helped a major food distribution company in The USA in implementing the robot framework for UI automation. More than 2000 Test cases are automated and ran using CI/CD pipeline."
              ghLink="https://github.com/sureshparimi/DSA-USA"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="API automation testing using Jmeter and Postman"
              description="Developed an automated test framework for functional and performance testing of APIs using Postman/Newman and Jmeter.This is a private repo, for legal reasons, can not be displayed but happy to walk you through the framework I developed.A sample public repo of similar one is linked here."
              ghLink="https://github.com/sureshparimi/aws-codepipeline-codebuild-with-postman"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Behave-BDD Framework for a UI and API testing of a critical health care application"
              description="This framework is enhanced significantly for reusability and maitnainability. Developed using Python, Behave and Behavex and BDD.Integrated with github actions CI/CD pipelines.I can not display the repo but can demo it on request."
              ghLink="https://github.com/HemeoBV/hemeo-e2e-automation"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
