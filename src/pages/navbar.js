import * as React from "react";
import Button from "./button";

export default function Navbar() {
  return (
    <>
      <nav className="  px-2.5 py-3 lg:py-2 md:py-2 mx-12 ">
        <div className="container flex flex-wrap items-center justify-between mx-5 ">
          <h1 className=" text-blue-400 font-bold text-xl">
            Medi <span className="text-orange-400"> Care+</span>
          </h1>

          <div
            className="hidden w-full md:block  md:w-auto"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 border text-blue-500 border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
              <button className="block py-2 pl-3 pr-4  " aria-current="page">
                Home
              </button>

              <button className="block py-2  pr-2 ">About</button>

              <button className="block py-2  pr-2  ">Services</button>

              <button className="block py-2 pr-2 ">News</button>
              <Button>Contact</Button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
