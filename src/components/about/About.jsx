import React from "react";
import img1 from "../../assets/verified.png";
import img3 from "../../assets/top-articles.png";
import img2 from "../../assets/write-share.png";
import img4 from "../../assets/mouthshut.png";
import AboutCard from "./AboutCard";
import Search from "../helpers/Search";

const About = () => {
  const aboutCardContent = [
    {
      image: img1,
      title: "Verified Reviews",
      subtitle: "For verified reviewers",
    },
    { image: img2, title: "Top Articles", subtitle: "Helps you deciede" },
    {
      image: img3,
      title: "Write Share Win Contest",
      subtitle: "Earn cash for reviews",
    },
    { image: img4, title: "MouthShut for Brands", subtitle: "Request a Demo" },
  ];

  return (
    <div className="about_container flex flex-col justify-center">
      <h1 className="text-[4rem] font-bold text-center">
        India's Leading Creative Platform
      </h1>
      <h2 className="text-2xl font-light text-[#4C696D] text-center">
        Experience hassle free bookings. Trusted by 2500+ Customers
      </h2>
      <div className="search_container flex justify-center my-5">
        <Search
          text="Search service, blog and many more…
"
        />
      </div>
      <div className="about_card_container flex gap-1 justify-evenly my-5 px-5">
        {aboutCardContent.map((elem, index) => {
          return (
            <AboutCard
              image={elem.image}
              title={elem.title}
              subtitle={elem.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
