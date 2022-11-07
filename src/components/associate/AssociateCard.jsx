import React from "react";
import star from "../../assets/star.png";
import verified_badge from "../../assets/verified-badge.png";

const AssociateCard = ({ image, Name, Location, isVerified, Starts }) => {
  return (
    <div
      className="w-1/5 rounded-3xl"
      style={{ boxShadow: "8px 4px 8px 1px rgba(0,0,0,0.75)" }}
    >
      <div className="profile_image rounded-t-3xl bg-[#2C2C2C]">
        <img src={image} alt="" />
      </div>
      <div className="lower_content bg-[#2C2C2C] rounded-b-3xl  flex pl-4 py-1 justify-between">
        <div className="text_content">
          <div className="name">{Name}</div>
          <div className="location">Location: {Location}</div>
        </div>
        {isVerified ? (
          <div className="verified">
            <img src={verified_badge} className="w-15 h-8" alt="" />
          </div>
        ) : (
          <div className="starts">
            {Starts}
            <img src={star} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AssociateCard;
