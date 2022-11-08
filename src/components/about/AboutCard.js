import React from "react";

const AboutCard = ({ image, title, subtitle }) => {
  return (
    <div className="flex items-center w-1/4">
      <img src={image} className="h-28 w-32 mr-2" alt="" />
      <div className="text_container">
        <h1 className="text-lg font-bold font-[Inter] leading-4">{title}</h1>
        <h2 className="text-[1rem] font-light text-sm font-[Inter]">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default AboutCard;
