import React from "react";
import WeddingCard from "./WeddingCard";

import wedding_1 from "../../assets/wedding_1.png";
import wedding_2 from "../../assets/wedding_2.png";
import wedding_3 from "../../assets/wedding_3.png";
import wedding_4 from "../../assets/wedding_4.png";

// image, name, detail, color;
const wedding_cards = [
  {
    image: wedding_1,
    name: "Danieela & Ronnie",
    details: "38 photos. Kittery, Poland",
    color: "#DDF8F3",
  },
  {
    image: wedding_2,
    name: "Danieela & Ronnie",
    details: "38 photos. Kittery, Poland",
    color: "#FBDADA",
  },
  {
    image: wedding_3,
    name: "Danieela & Ronnie",
    details: "38 photos. Kittery, Poland",
    color: "#FFF9D9",
  },
  {
    image: wedding_4,
    name: "Danieela & Ronnie",
    details: "38 photos. Kittery, Poland",
    color: "#DDE4FF",
  },
];

const Wedding = () => {
  return (
    <div className="p-8">
      <div className="text_content mb-3">
        <h1 className="text-[#4C696D] text-3xl font-bold">Real Wedding</h1>
        <h2 className="font-normal text-black">
          List your wedding and browse protfolio
        </h2>
      </div>
      <div className="cards_container flex justify-center">
        <div className="cards flex gap-10 w-[95%]">
          {wedding_cards.map((elem) => {
            return (
              <WeddingCard
                image={elem.image}
                name={elem.name}
                detail={elem.details}
                color={elem.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wedding;
