import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <img 
          src={`https://ghchart.rshah.org/c084f5/sureshparimi`}
          alt="Suresh Parimi's Github chart"
          style={{ width: '100%', maxWidth: '800px' }}
        />
      </div>
    </Row>
  );
}

export default Github;
