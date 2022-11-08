import React from "react";
import bg from "../../assets/photo-bg.jpeg";
import camera from "../../assets/camera.png";

const Photography = () => {
  return (
    <div
      className="min-h-[55vh] bg-cover bg-no-repeat p-12 flex justify-end items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img className="h-[10rem] w-[24rem] mr-20" src={camera} alt="" />
    </div>
  );
};

export default Photography;
