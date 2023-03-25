import React from "react";

const Customercard = ({ reviews }) => {
  return (
    <>
      <div className="  w-96 h-60  bg-[#667C94]">
        <p className="text-[#002348]">{reviews.Reviews}</p>
        <h1 className="text-[#002348]">{reviews.Name}</h1>
      </div>
    </>
  );
};

export default Customercard;
