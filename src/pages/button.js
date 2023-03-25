import React from "react";

export default function Button(props) {
  return (
    <>
      <button
        className="bg-blue-500 px-8 py-3 rounded-full text- text-white font-bold"
        {...props}
      ></button>
    </>
  );
}
