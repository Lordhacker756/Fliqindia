import React from "react";
import FeatureCard from "./FeatureCard";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";

import service_1 from "../../assets/service-1.png";
import service_2 from "../../assets/service-2.png";
import service_4 from "../../assets/service-4.png";
import service_3 from "../../assets/service-3.png";

const packages = [
  {
    image: service_1,
    name: "Pre Wedding Photoshoot",
    price: "25,000 (One Day)",
  },
  { image: service_2, name: "Wedding Photoshoot", price: "65,000 (Two Day)" },
  {
    image: service_3,
    name: "Portfolio Shoot",
    price: "25,000 (Standard price for 6-8 hours)",
  },
  { image: service_4, name: "Birthday Baby Folio", price: "15,000 (One Day)" },
  {
    image: service_1,
    name: "Pre Wedding Photoshoot",
    price: "25,000 (One Day)",
  },
  { image: service_2, name: "Wedding Photoshoot", price: "65,000 (Two Day)" },
  {
    image: service_3,
    name: "Portfolio Shoot",
    price: "25,000 (Standard price for 6-8 hours)",
  },
  { image: service_4, name: "Birthday Baby Folio", price: "15,000 (One Day)" },
];

const Features = () => {
  function nextCards() {
    let box = document.querySelector(".cards");
    let width = box.clientWidth + 30;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  }

  function prevCards() {
    let box = document.querySelector(".cards");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  }

  return (
    <div className="px-6">
      <div className="text_content">
        <h1 className="text-[#4C696D] text-2xl font-bold">
          Our Featured Services
        </h1>
        <h2 className="font-normal text-black">
          Discover the range of services provided by FliqaIndia
        </h2>
      </div>
      <div className="featureCarousel relative flex justify-center my-7">
        <div className="cards flex gap-12 w-[88vw] min-h-[350px] overflow-x-hidden scroll-smooth">
          {packages.map((elem) => {
            return (
              <FeatureCard
                image={elem.image}
                planName={elem.name}
                price={elem.price}
              />
            );
          })}
        </div>
        <button
          className="bg-[#DDF8F3] flex items-center justify-center absolute top-[50%] left-0 w-7 h-7 rounded-full"
          onClick={prevCards}
        >
          <img className="w-[35%]" src={prev} alt="" />
        </button>
        <button
          className="bg-[#DDF8F3] flex items-center justify-center absolute top-[50%] right-0 w-7 h-7 rounded-full"
          onClick={nextCards}
        >
          <img className="w-[35%]" src={next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Features;
