import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Automation Test Consultant",
          "Software Test Consultant/Lead/Test Co-ordinator",
          "Expertise in Testing Web, Mobile and REST Services",
          "Digital Nomad in Europe",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
