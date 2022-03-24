import "./hero.css";

export const HeroContainer = ({ children }) => (
  <div className="hero">{children}</div>
);

export const HeroContent = () => (
  <div className="hero-content">
    <HeroHeader />
    <HeroSubtitle>Making Leap A Sense</HeroSubtitle>
  </div>
);

export const HeroHeader = ({ children }) => (
  <div className="hero-header">{children}</div>
);

export const HeroSubtitle = ({ children }) => (
  <div className="hero-subtitle">{children}</div>
);
