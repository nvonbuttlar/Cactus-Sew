import React from "react";
import { useSpring, animated } from "react-spring";

import "../styles/Landing.css";

function Landing() {
  const fade_transition = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={fade_transition} className="container">
      <h1>Welcome to Cactus Sewing Studio.</h1>
    </animated.div>
  );
}

export default Landing;
