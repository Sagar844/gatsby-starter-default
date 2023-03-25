import React from "react";
import Servicescard from "./servicescard";

const  OurServices = ( ) =>  {
  return (
    <>
      <div className="items-center text-center my-28">
        <h1 className="text-[#003B79] text-2xl font-bold mb-4">OurServices</h1>
        <p className="text-[#002348] font-sm">
          We provide the most full medical services, so every person could{" "}
          <br></br> heave the oppurtunity to receive qualitative medical help.
        </p>
      </div>
      <Servicescard />
    </>
  );
}

export default OurServices