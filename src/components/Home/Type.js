import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Test Automation Architect",
          "QA/Test Management Lead",
          "Release Management Consultant",
          "DevOps & CI/CD Testing Expert",
          "Test Strategy Consultant",
          "Based in Amsterdam, Netherlands",
          "17+ Years in Software Quality Assurance",
          "Agile Testing & Leadership",
          "Cloud Testing Specialist (AWS/Azure)",
          "Test Automation Framework Designer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
