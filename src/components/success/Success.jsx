import React from "react";

import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import SuccessCard from "./SuccessCard";

const success = [
  {
    image: s1,
    message:
      "Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.",
  },
  {
    image: s2,
    message:
      "Appreciation from Startup Bengal for our creative startup community",
  },
  { image: s3, message: "FliqaIndia got featured on Yourstory. Click here" },
  {
    image: s4,
    message: "Received awards from ImagesBazaar on leading creative industry",
  },
  { image: s5, message: "Top ten in Intuit Circle Codeathon, 2020" },
];

const Success = () => {
  return (
    <div className="main_container p-8 flex justify-center">
      <div
        className="container bg-[#ACCBC7] rounded-xl py-8"
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="text_conten text-center mb-6">
          <h1 className="text-[#4C696D] text-3xl font-bold">Our Success</h1>
          <h2 className="font-normal text-black">Journey of our success</h2>
        </div>
        <div className="img_div flex gap-10 justify-center items-center">
          {success.map((elem) => {
            return <SuccessCard image={elem.image} message={elem.message} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Success;
