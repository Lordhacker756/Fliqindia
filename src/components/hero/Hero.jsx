import React from "react";
import bg from "../../assets/hero-bg.png";

const Hero = () => {
  return (
    <div
      className="hero_container h-[24.5rem] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    ></div>
  );
};

export default Hero;
