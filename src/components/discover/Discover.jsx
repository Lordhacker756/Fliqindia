import React from "react";
import bg from "../../assets/discover-bg.png";
import walk from "../../assets/walk.jpeg";
import book from "../../assets/book.jpeg";
import books from "../../assets/books.jpeg";
import card from "../../assets/card.png";

const Discover = () => {
  return (
    <div
      className="main_container relative flex bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="left w-1/3">
        <h1>DISCOVER</h1>
        <h2>GRAPHIC DESIGNING IDEAS</h2>
        <h2>AND SERVICES</h2>
        <h3>FROM BRANDING TO MARKETING</h3>
      </div>
      <div className="right w-2/3 flex gap-10">
        <img className="w-[25%]" src={card} alt="" />
        <img className="w-[25%]" src={walk} alt="" />
        <img className="w-[25%]" src={book} alt="" />
        <img className="w-[25%]" src={books} alt="" />
      </div>
    </div>
  );
};

export default Discover;
