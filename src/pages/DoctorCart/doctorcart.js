import React from "react";

const Doctorcart = () => {
  return (
    <>
      <div className="text-center my-28 space-y-8">
        <h1 className="text-[#003B79] text-2xl font-bold">
          We Have The Best Specialist
        </h1>
        <p className="text-[#002348] text-sm">
          We have a wide experience in experience design and strategy,<br></br>
          with locally-rooted knowledge.
        </p>
      </div>
      <div className="flex gap-4 justify-center text-center text-[#002348 ] font-bold  font-sm ">
        <div>
          <div className="bg-[#AED3E2] max-w-sm h-80 w-60 rounded-t-lg "> </div>
          <h1>Dr. Awaatif Al</h1>
          <p>Dental Care</p>
        </div>
        <div>
          <div className="bg-[#AED3E2] max-w-sm h-80 w-60 rounded-t-lg "> </div>
          <h1>Dr. Filipa Gaspar</h1>
          <p>Cardiology</p>
        </div>
        <div>
          <div className="bg-[#AED3E2] max-w-sm h-80 w-60 rounded-t-lg "> </div>
          <h1>Dr. Sukhmeet Gorae</h1>
          <p>Neurological</p>
        </div>
        <div>
          <div className="bg-[#AED3E2] max-w-sm h-80 w-60 rounded-t-lg  "></div>
          <h1>Dr. Siri Jakobsson</h1>
          <p>Prediatrics</p>
        </div>
      </div>
    </>
  );
};

export default Doctorcart;
