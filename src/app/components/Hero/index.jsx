import React, { useEffect, useRef, useState } from "react";
import { HeroContainer, HeroContent, HeroHeader, HeroSubtitle } from "./Hero";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Hero() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} open={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent />
    </HeroContainer>
  );
}

export default Hero;
