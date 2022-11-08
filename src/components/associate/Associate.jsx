import React from "react";
import AssociateCard from "./AssociateCard";
import bg from "../../assets/associate-bg.png";
import associate_1 from "../../assets/associate-1.png";
import associate_2 from "../../assets/associate-2.png";
import associate_3 from "../../assets/associate-3.png";
import associate_4 from "../../assets/associate-4.png";
import associate_5 from "../../assets/associate-5.png";

const associates = [
  {
    image: associate_1,
    name: "Name Title",
    location: "",
    isVerified: true,
    stars: "5.0",
  },
  {
    image: associate_2,
    name: "Name Title",
    location: "",
    isVerified: true,
    stars: "5.0",
  },
  {
    image: associate_3,
    name: "Name Title",
    location: "",
    isVerified: false,
    stars: "5.0",
  },
  {
    image: associate_4,
    name: "Name Title",
    location: "",
    isVerified: true,
    stars: "5.0",
  },
  {
    image: associate_5,
    name: "Name Title",
    location: "",
    isVerified: false,
    stars: "5.0",
  },
];

const Associate = () => {
  return (
    <div
      className="flex flex-col bg-no-repeat bg-cover p-6 pb-2 mt-20 my-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="upper_content flex justify-between mb-4">
        <div className="text_content">
          <h1 className="text-[#4C696D] text-2xl font-bold">
            Find Trusted Associate
          </h1>
          <h2 className="font-normal text-black">
            Find the ebst Fliqa Associate for your special day
          </h2>
        </div>
        <button className="text-xl text-[#4C696D]">See More &gt;&gt;</button>
      </div>
      <div
        className="card_container my-8 flex justify-evenly gap-7
       text-white"
      >
        {associates.map((elem) => {
          return (
            <AssociateCard
              Name={elem.name}
              image={elem.image}
              isVerified={elem.isVerified}
              Starts={elem.stars}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Associate;
