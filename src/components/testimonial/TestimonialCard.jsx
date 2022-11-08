import React from "react";

const TestimonialCard = ({ image, message, name }) => {
  return (
    <div
      className="card_container bg-[#416F75] rounded-xl relative px-2 h-[13rem] text-white text-center flex items-center flex-col justify-end pb-2"
      style={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="image_container">
        <img
          src={image}
          className="absolute -top-12 -right-10 scale-75"
          alt=""
        />
      </div>
      <h1 className="message text-xs">{message}</h1>
      <h2 className="name font-bold pb-4">{name}</h2>
    </div>
  );
};

export default TestimonialCard;
