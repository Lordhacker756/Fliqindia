import React from "react";
import cta from "../../assets/cta.png";

const CTA = () => {
  return (
    <div
      className="main_div bg-cover bg-no-repeat flex justify-between min-h-[45vh] mt-8 py-12"
      style={{ backgroundImage: `url(${cta})` }}
    >
      <div className="left flex flex-col w-[25%] ml-8 items-center ">
        <h1 className="title font-bold text-2xl text-white ">
          Grow your freelancing career with Fliqa Associate
        </h1>
        <h2 className="subtitle text-white ">
          Register yourself <br /> Verification & Quality Check <br /> Verified
          Associate at FliqaIndia
        </h2>
      </div>
      <div className="right flex items-start justify-center w-[25vw]">
        <button className="bg-white w-32  rounded-lg text-lg">Join Now</button>
      </div>
    </div>
  );
};

export default CTA;
