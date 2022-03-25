import React from "react";
import About from "../About/about";
import Events from "../Events";
import Hero from "../Hero";
import Timer from "../Timer/Timer";

function home() {
  return (
    <div>
      <Hero />

      <Timer />

      <About />

      <Events />
    </div>
  );
}

export default home;
