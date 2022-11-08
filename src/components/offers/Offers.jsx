import React from "react";
import bg from "../../assets/offer-bg.jpeg";
import OfferCard from "./OfferCard";

import offer_1 from "../../assets/offer_1.png";
import offer_2 from "../../assets/offer_2.png";
import offer_3 from "../../assets/offer_3.png";
import VerticleLine from "../helpers/VerticleLine";

const offer_cards = [
  { offer: "Wedding Packages", image: offer_1 },
  { offer: "Website Design", image: offer_2 },
  { offer: "Beach Photography", image: offer_3 },
  { offer: "Wedding Packages", image: offer_1 },
];

const Offers = () => {
  return (
    <div
      className="main_container p-4 bg-cover bg-no-repeat"
      style={{ background: `url(${bg})` }}
    >
      <div className="text_content mb-3 text-center">
        <h1 className="text-[#4C696D] text-3xl font-bold">Best Offers</h1>
        <h2 className="font-normal text-black">
          Discover the best offers on our services
        </h2>
      </div>
      <div className="cards_container flex gap-[4rem] justify-center items-center">
        {offer_cards.map((item, index) => {
          if (index < 3) {
            return (
              <>
                <OfferCard offer={item.offer} image={item.image} />
                <VerticleLine />
              </>
            );
          } else {
            return <OfferCard offer={item.offer} image={item.image} />;
          }
        })}
      </div>
    </div>
  );
};

export default Offers;
