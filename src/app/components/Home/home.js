import React from "react";
import About from "../About/about";
import Hero from "../Hero";
import Timer from "../Timer/Timer";

function home() {
  return (
    <div>
      <Hero />

      <Timer />

      <About />
    </div>
  );
}

export default home;
