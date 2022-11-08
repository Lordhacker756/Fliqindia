import React from "react";
import Divider from "../helpers/Divider";

const FeatureCard = ({ image, planName, price }) => {
  return (
    <div
      className="main_container rounded-lg flex flex-col pb-1 "
      style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
    >
      <img className="scale-105" src={image} alt="" />
      <h1 className="font-bold font-[Inter]  text-center">{planName}</h1>
      <Divider width="90%" />
      <h2 className="text-[#4C696D] font-[Inter] text-sm font-bold text-center w-[80%] m-auto mb-2">
        Starting at <span className="font-normal">{price}</span>
      </h2>
      <button className="bg-[#4E99A4] font-[Inter] px-10 py-1 text-xs m-auto text-white rounded-lg">
        Know More
      </button>
    </div>
  );
};

export default FeatureCard;
