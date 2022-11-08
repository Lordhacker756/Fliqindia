import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#131514] flex justify-between px-10 h-32 items-center">
      <div className="left_colum flex items-center">
        <div className="text-3xl text-white mr-8">
          <img className="h-16 w-36" src={logo} alt="" />
        </div>
        <div className="nav_links flex items-center">
          <ul className="flex gap-8">
            <li className="text-white text-base font-[Inter]">Home</li>
            <li className="text-white text-base font-[Inter]">Services</li>
            <li className="text-white text-base font-[Inter]">Portfolio</li>
            <li className="text-white text-base font-[Inter]">Community</li>
            <li className="text-white text-base font-[Inter]">Blog</li>
          </ul>
        </div>
      </div>
      <div className="nav_btns">
        <button className="bg-gradient-to-b from-[#017B96] to-[#1E4047] font-[Inter] text-white rounded-full px-8 py-2 mx-2">
          Sign Up
        </button>
        <button className="bg-gradient-to-b from-[#017B96] to-[#1E4047] font-[Inter] text-white rounded-full px-8 py-2 mx-2">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
