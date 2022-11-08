import React from "react";

const SuccessCard = ({ image, message }) => {
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="img_container w-[10rem] h-[10rem] object-contain bg-white rounded-full flex items-center justify-center">
        <img src={image} className="w-[80%] object-contain" alt="" />
      </div>
      <div className="text text-center w-[15vw] mt-2">
        <p className="text-xs">{message}</p>
      </div>
    </div>
  );
};

export default SuccessCard;
