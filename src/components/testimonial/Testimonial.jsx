import React from "react";

import image from "../../assets/test-person.png";
import bg from "../../assets/testimonial.jpeg";
import TestimonialCard from "./TestimonialCard";
import test_bg from "../../assets/test-bg-2.jpeg";

const testimonials = [
  {
    image: image,
    message:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    name: "~Ramdom Name",
  },
  {
    image: image,
    message:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    name: "~Ramdom Name",
  },
  {
    image: image,
    message:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    name: "~Ramdom Name",
  },
  {
    image: image,
    message:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    name: "~Ramdom Name",
  },
];

const Testimonial = () => {
  return (
    <div className="main_container flex p-8 gap-10 items-center">
      <div className="image w-[40vw]">
        <img className="scale-110" src={bg} alt="" />
      </div>
      <div className="right_column w-[60vw] p-5">
        <div className="top_content flex items-center justify-between">
          <div className="left_heading pb-5">
            <h1 className="text-[#4C696D] text-3xl font-bold">Testimonials</h1>
            <h2 className="font-normal text-black">Words for our clients</h2>
          </div>
          <div className="buttons font-[Inter]">
            <button className="rounded-lg border bg-[#4E99A4] text-white font-semibold text-sm w-[6.5rem] mx-2 border-black">
              Google
            </button>
            <button className="rounded-lg border font-semibold text-sm w-[6.5rem] border-black">
              Facebook
            </button>
            <button className="rounded-lg border font-semibold text-sm w-[6.5rem] mx-2 border-black">
              Weddingwire
            </button>
            <button className="rounded-lg border font-semibold text-sm w-[6.5rem] mx-2 border-black">
              WedmeGood
            </button>
          </div>
        </div>
        <div
          className="cards flex gap-10 mt-10"
          style={{ backgroundImage: `url(${test_bg})` }}
        >
          {testimonials.map((elem) => {
            return (
              <TestimonialCard
                image={elem.image}
                message={elem.message}
                name={elem.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
