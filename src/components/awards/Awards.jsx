import React from "react";

import highlight_1 from "../../assets/hightlight-1.png";
import highlight_2 from "../../assets/highlight-2.png";
import AwardCards from "./AwardCards";

import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";

const awards = [
  { image: c1, ratings: "4.9" },
  { image: c2, ratings: "4.9" },
  { image: c3, ratings: "4.9" },
  { image: c4, ratings: "4.8" },
  { image: c5, ratings: "5.0" },
  { image: c6, ratings: "5.0" },
];

const Awards = () => {
  return (
    <div className="main_container  p-8  flex justify-center">
      <div
        className="rounded-xl flex w-[95vw] items-center bg-[#DDF8F3]"
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="left_container w-[53vw] flex justify-center">
          <div
            className="container bg-[#4E99A4] flex py-9 px-3 rounded-xl justify-center m-10 gap-5"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img src={highlight_1} className="w-[45%]" alt="" />
            <img src={highlight_2} className="w-[45%]" alt="" />
          </div>
        </div>
        <div className="right_container w-[47vw] grid grid-cols-2 gap-2 px-10">
          {awards.map((elem) => {
            return <AwardCards image={elem.image} ratings={elem.ratings} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Awards;
