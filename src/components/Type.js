import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineering Lead",
          "Test Automation Architect",
          "SEPA Payments Testing Expert",
          "CI/CD & DevOps Specialist",
          "Agile Testing Leader"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type; 