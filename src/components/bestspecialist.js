import * as React from "react";
import Button from "./button";
// import image from "./assest/doctor.jpg";
export default function Bestspecialist() {
  return (
    <>
      <div className="  mx-20 my-20 flex justify-between ">
        <div className="space-y-5">
          <h1 className="text-[#002348] text-xl font-bold">
            Welcome to MediCare + Clinic
          </h1>
          <h1 className="font-bold text-[#003B79] text-6xl">
          
            Best Specialist
          </h1>

          <p className="text-[#002348] text-sm ">
            We are on the leading edge of cancer care. Providing the full
            <br></br>
            continuum of cancer treatments and supportive care services in a
            <br></br>
            single convenient location.
          </p>

          <div className="space-x-10">
            <Button>Make an Appointment</Button>
            <button className="text-blue-500 font-bold">Departments</button>
          </div>
        </div>

        {/* <img alt="doctor" className="w-96 rounded-md" src={image} /> */}
      </div>
    </>
  );
}
