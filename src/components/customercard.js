import React from "react";

const Customercard = ({ reviews }) => {
  return (
    <>
      <div className="  w-96 h-60 space-y-2 font-bold bg-[#667C94]">
        <p className="text-white ">{reviews.Reviews}</p>
        <h1 className="text-white ">{reviews.Name}</h1>
      </div>
    </>
  );
};

export default Customercard;
