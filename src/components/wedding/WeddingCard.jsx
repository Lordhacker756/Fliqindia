import React from "react";

import slide_1 from "../../assets/slide_1.png";
import slide_2 from "../../assets/slide_2.png";

const WeddingCard = ({ image, name, detail, color }) => {
  return (
    <div
      className="card_container p-2 rounded-xl"
      style={{
        backgroundColor: `${color}`,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="slides flex">
        <img className="w-1/3 object-contain" src={slide_1} alt="" />
        <img className="w-1/3 object-contain" src={slide_2} alt="" />
        <img className="w-1/3 object-contain" src={slide_2} alt="" />
      </div>
      <div className="text_container px-3 py-2">
        <h1 className="name text-lg font-bold">{name}</h1>
        <h2 className="details font-base text-sm text-[#4C696D]">{detail}</h2>
      </div>
    </div>
  );
};

export default WeddingCard;
