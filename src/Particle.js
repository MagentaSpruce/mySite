import React, { Component } from "react";

import Particles from "react-particles-js";

class Particle extends Component {
  render() {
    return (
      <Particles
        className="particles"
        params={{
          polygon: {
            enable: true,
            type: "inside",
            move: {
              radius: 10,
            },
          },
          particles: {
            number: {
              value: 20,
            },
            size: {
              value: 3,
            },
            line_linked: {
              enable: true,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    );
  }
}

export default Particle;
