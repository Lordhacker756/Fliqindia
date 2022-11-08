import React from "react";
import "./search.module.css";
function handleSubmit() {}

const Search = ({ text }) => {
  return (
    <form
      id="form"
      className="border-solid border-[1px] border-black w-[60vw] flex justify-between  rounded-full"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        className="outline-none w-full mx-4 flex justify-center font-[Josefin-Sans] placeholder:font-[Josefin-Sans] placeholder:text-center"
        id="query"
        name="q"
        placeholder={text}
      />
      <button
        type="submit"
        className=" text-white bg-black py-2 px-[6rem] font-[Jost] rounded-full"
        onClick={(e) => e.preventDefault}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
