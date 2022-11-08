import React from "react";
import bg from "../../assets/discover-bg.png";
import walk from "../../assets/walk.png";
import book from "../../assets/book.png";
import books from "../../assets/books.png";
import card from "../../assets/card.png";
// import "./discover.css";

const Discover = () => {
  return (
    <div
      className="main_container relative min-h-[45vh] px-4 pb-10 flex bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="left py-8 px-3 flex justify-center h-[45vh] item-center flex-col w-1/3">
        <h1
          className="text-2xl font-light font-[Bebas-neue] text-white"
          style={{ fontFamily: "Bebas Neue" }}
        >
          DISCOVER
        </h1>
        <h2
          className="text-3xl font-bold text-white"
          style={{ fontFamily: "Bebas Neue" }}
        >
          GRAPHIC DESIGNING IDEAS
        </h2>
        <h2
          className="text-3xl font-bold text-white"
          style={{ fontFamily: "Bebas Neue" }}
        >
          AND SERVICES
        </h2>
        <h3
          className="text-lg font-light text-white"
          style={{ fontFamily: "Bebas Neue" }}
        >
          FROM BRANDING TO MARKETING
        </h3>
        <div className="search my-2">
          <form
            id="form"
            className="border-solid border-[1px] border-black flex justify-between  rounded-full"
          >
            <input
              type="search"
              className="outline-none font-[Josefin-Slab] px-4 w-full rounded-full  placeholder:text-xs flex justify-center placeholder:pl-3 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[rgba(0, 0, 0, 0.5)]"
              id="query"
              name="q"
              placeholder=" what kind of design are you looking for?"
            />
            <button
              type="submit"
              className=" text-white bg-black font-[Jost] py-1 px-[2rem] -ml-8 rounded-full"
              onClick={(e) => e.preventDefault}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="right w-[70%] flex gap-10">
        <img className="w-[9rem] h-[15rem]" src={walk} alt="" />
        <img className="w-[10rem] h-[13rem]" src={book} alt="" />
        <img className="w-[10rem] h-[15rem]" src={card} alt="" />
        <img className="w-[10rem] h-[14rem]" src={books} alt="" />
      </div>
    </div>
  );
};

export default Discover;
