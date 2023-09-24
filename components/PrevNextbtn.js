"use client";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const PrevNextbtn = ({ setPageNo, pageNo, totalResults }) => {
  const handlePrevbtn = () => {
    if (pageNo <= 1) return;
    else {
      setPageNo(pageNo - 1);
    }
  };
  const handleNextbtn = () => {
    if (pageNo >= Math.floor(totalResults / 20)) return;
    else {
      setPageNo(pageNo + 1);
    }
  };
  return (
    <div className="flex justify-between items-center w-full my-4">
      <button
        className={`flex gap-1 items-center justify-center bg-blue-600 text-white font-medium p-2 w-32 h-12 rounded-md  ${
          pageNo <= 1
            ? "opacity-60"
            : "opacity-100 hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 transition-all"
        }`}
        onClick={handlePrevbtn}
        disabled={pageNo <= 1 ? true : false}
      >
        <IconContext.Provider value={{ className: "arrow-icons" }}>
          <BsArrowLeft />
        </IconContext.Provider>
        Previous
      </button>
      <button
        className={`flex gap-1 items-center justify-center bg-blue-600 text-white font-medium p-2 w-32 h-12 rounded-md ${
          pageNo >= Math.floor(totalResults / 20)
            ? "opacity-60"
            : "opacity-100 hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 transition-all"
        }`}
        onClick={handleNextbtn}
        disabled={pageNo >= Math.floor(totalResults / 20) ? true : false}
      >
        Next
        <IconContext.Provider value={{ className: "arrow-icons" }}>
          <BsArrowRight />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default PrevNextbtn;
