import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="  px-2.5 py-10 lg:py-2 md:py-2 mx-12 mt-40 ">
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
              </ul>
            </div>
          </div>
        </div>

        <div className="flex space-x-5 mx-16 mt-10 ">
          <img alt="svfg" src="https://img.icons8.com/fluency-systems-regular/48/000000/facebook-new--v1.png" />
          <img alt="jd" src="https://img.icons8.com/color/48/null/google-logo.png" />
        </div>
        <h1 className="text-[#667C94] text-sm font-bold mx-16 mt-4">
          ©2020 PodPayment - 2020
        </h1>
      </footer>
    </>
  );
};

export default Footer;
