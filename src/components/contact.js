import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-[#007FF4]  px-5 text-white mx-40 mt-40 py-20 rounded-lg text-center ">
        <h1 className="text-2xl font-bold ">Subscribe to Newsletter</h1>
        <p className="text-sm">We have a wide experience in experience design and strategy,</p>

        <div className="relative mt-20 flex justify-center mx-28 ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            className="block w-full py-8  pl-10 text-sm text-gray-900 border rounded-lg"
            placeholder="Enter your email address..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Send Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact
