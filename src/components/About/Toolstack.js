import React from "react";
import { Col, Row, Table } from "react-bootstrap";

function Toolstack() {
  return (
    <div className="tools-section">
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Category</th>
            <th>Tools & Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Programming Languages</td>
            <td>Java • Python • JavaScript</td>
          </tr>
          <tr>
            <td>Web UI Automation</td>
            <td>Playwright • Cypress • Selenium</td>
          </tr>
          <tr>
            <td>Mobile Testing</td>
            <td>Appium • Detox</td>
          </tr>
          <tr>
            <td>API Testing</td>
            <td>RestAssured • Postman • Pytest</td>
          </tr>
          <tr>
            <td>CI/CD & DevOps</td>
            <td>Jenkins • GitHub Actions • Azure DevOps • Docker</td>
          </tr>
          <tr>
            <td>Cloud Platforms</td>
            <td>AWS • Azure</td>
          </tr>
          <tr>
            <td>Reporting & Analytics</td>
            <td>Allure • Extent Reports • Grafana • ELK Stack • Report Portal</td>
          </tr>
          <tr>
            <td>Test Management</td>
            <td>JIRA • Zephyr • X-Ray • PowerBI • Streamlit</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Toolstack;
