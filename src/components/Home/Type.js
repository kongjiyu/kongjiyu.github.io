import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-stack Developer",
          "CRM Consultant",
          "Founder of K&E Tech Innovations",
          "Cloud Infrastructure Enthusiast",
          "iOS Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
