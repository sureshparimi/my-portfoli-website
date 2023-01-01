import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Development Engineer in Test",
          "Software Test Engineer",
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
