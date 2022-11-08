import React from "react";
import top_right from "../../assets/top-right.png";
import bottom_left from "../../assets/bottom-left.png";

import fb from "../../assets/fb.png";
import whatsapp from "../../assets/whatsapp.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";

const socials = [
  { Image: fb, link: "#" },
  { Image: whatsapp, link: "#" },
  { Image: linkedin, link: "#" },
  { Image: youtube, link: "#" },
  { Image: instagram, link: "#" },
];

const Footer = () => {
  return (
    <div className="bg-[#131514] text-white relative overflow-hidden font-[Rubik]">
      <div className="inner_container px-8 pt-10 pb-3">
        <div className="upper flex justify-between item-top">
          <div className="left flex flex-col w-[30%]">
            <h1 className="text-2xl py-2">Never miss a thing.</h1>
            <div className="search py-1">
              <form
                id="form"
                className="border-solid border-[1px] border-black flex justify-between  rounded-full"
              >
                <input
                  type="search"
                  className="outline-none w-full rounded-full  placeholder:italic flex justify-center px-4 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[rgba(0, 0, 0, 0.5)]"
                  id="query"
                  name="q"
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  className=" text-[#4B4B4B] bg-[#E0E0E0] py-1 px-[2rem] italic -ml-8 rounded-full"
                  onClick={(e) => e.preventDefault}
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="socials ">
              <h1 className="italic text-lg">Be in touch</h1>
              <div className="links flex">
                {socials.map((elem) => {
                  return (
                    <img
                      className="px-[2px] scale-75 cursor-pointer"
                      src={elem.Image}
                      alt=""
                      href={elem.link}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="center w-[25%]">
            <h1 className="title text-2xl text-center py-2">
              Never miss a thing
            </h1>
            <div className="links flex gap-10 py-2 justify-between">
              <div className="left text-xs">
                <p>Services</p>
                <p>Blog</p>
                <p>Portfolio</p>
              </div>
              <div className="right text-xs">
                <p>Tutorial</p>
                <p>Careers</p>
                <p>Film</p>
              </div>
            </div>
          </div>
          <div className="right z-20">
            <h1 className="text-2xl z-10">
              Never <span className="text-[#888181] z-20">miss a thing</span>
            </h1>
            <p className="text-xs py-[2px]">Contact Us</p>
            <p className="text-xs py-[2px]">Feedback</p>
            <p className="text-xs py-[2px]">FAQ</p>
            <p className="text-xs py-[2px]">Terms and conditions</p>
            <p className="text-xs py-[2px]">Privacy Policy</p>
            <p className="text-xs py-[2px]">Data Deletion</p>
          </div>
        </div>
        <div className="creadits flex justify-center">
          <p className="w-[30%] text-center text-xs font-light">
            2019-2021, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED <br /> POWERED BY
            FLIQAINDIA PVT. LTD. <br /> VERSION 5.1.5
          </p>
        </div>
      </div>
      <img
        src={top_right}
        className="absolute top-0 right-0 z-10 translate-x-24 "
        alt=""
      />
      <img
        src={bottom_left}
        className="absolute bottom-0 left-0 z-10 -translate-x-11 translate-y-10"
        alt=""
      />
    </div>
  );
};

export default Footer;
