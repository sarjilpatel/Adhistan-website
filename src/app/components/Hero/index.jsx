import React, { useEffect, useRef, useState } from "react";
import { HeroContainer, HeroContent, HeroHeader, HeroSubtitle } from "./Hero";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Timer from "../Timer";

function Hero() {
  return (
    <HeroContainer>
      <HeroContent />
    </HeroContainer>
  );
}

export default Hero;
