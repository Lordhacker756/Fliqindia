import React from "react";

const AwardCards = ({ image, ratings }) => {
  return (
    <div
      className="bg-white rounded-xl w-[18vw] h-[10vh] m-1 flex justify-around px-2 items-center"
      style={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="image w-[80%] h-[100%] flex items-center overflow-hidden">
        <img src={image} className="w-[max] h-auto" alt="" />
      </div>
      <div className="text w-[20%]">
        <h1>{ratings}/5</h1>
      </div>
    </div>
  );
};

export default AwardCards;
