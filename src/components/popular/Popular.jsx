import React from "react";
import Divider from "../helpers/Divider";

const Popular = () => {
  return (
    <div className="flex flex-col my-10 justify-center items-center">
      <div className="topics flex justify-evenly w-[90%] mb-5">
        <h1 className="text-3xl">Popular:</h1>
        <h1 className="text-3xl text-[#4C696D]">Website</h1>
        <h1 className="text-3xl text-[#4C696D]">Design</h1>
        <h1 className="text-3xl text-[#4C696D]">Logo Design</h1>
        <h1 className="text-3xl text-[#4C696D]">Brochure</h1>
        <h1 className="text-3xl text-[#4C696D]">Label Design</h1>
      </div>
      <Divider width="90%" />
    </div>
  );
};

export default Popular;
