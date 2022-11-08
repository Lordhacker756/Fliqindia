import React from "react";
import discount from "../../assets/discount.png";

const OfferCard = ({ offer, image }) => {
  return (
    <div
      className="main_container w-[15vw] h-auto bg-transparent flex flex-col justify-center items-center bg-white rounded-xl"
      style={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        fontFamily: "Josefin Sans",
      }}
    >
      <div
        className="package relative h-[16rem] bg-no-repeat bg-cover text-white bg-opacity-50 bg-black bg-blend-overlay rounded-xl "
        style={{
          backgroundImage: `url(${image})`,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="text_container p-8 text-center flex justify-center">
          <h1 className="text-xl pb-3 font-base w-[75%] border-b-2 border-white">
            {offer}
          </h1>
        </div>
        <h2 className="text-lg pl-2 m-0">Discount</h2>
        <img src={discount} alt="" />
      </div>
      <button className="m-auto  py-2 text-sm font-semibold rounded-b-xl">
        BOOK NOW
      </button>
    </div>
  );
};

export default OfferCard;
