import React from "react";

const Divider = ({ width }) => {
  return (
    <div
      className={`border-solid border-b-[1px] m-auto border-black h-0`}
      style={{ width: `${width}` }}
    ></div>
  );
};

export default Divider;
