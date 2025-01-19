import React from "react";
import { Table } from "react-bootstrap";

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
            <td>CI/CD & DevOps</td>
            <td>Azure DevOps • GitHub Actions • Jenkins • Docker</td>
          </tr>
          <tr>
            <td>Test Management</td>
            <td>JIRA • TestRail • ALM • Zephyr</td>
          </tr>
          <tr>
            <td>Automation Frameworks</td>
            <td>Selenium • Cypress • Playwright • RestAssured • Appium</td>
          </tr>
          <tr>
            <td>Programming</td>
            <td>Python • JavaScript • Java</td>
          </tr>
          <tr>
            <td>Performance Testing</td>
            <td>JMeter • LoadRunner</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Toolstack;
