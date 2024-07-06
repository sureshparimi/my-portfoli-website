import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suresh Parimi </span>
            from <span className="purple"> Amsterdam, The Netherlands</span>
            <br />I am an Automation Test Consultant & Jira, Confluence Administrator
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Nomadic life Style
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to get the things right that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Suresh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
