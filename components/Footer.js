import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse sm:flex-row sm:gap-0 gap-8 sm:justify-evenly items-center w-full min-h-[200px] bg-black mt-6 py-8 px-4 sm:p-6 md:p-10">
      <div className="w-full">
        <h2 className="text-white font-bold text-2xl ">MediaScope</h2>
        <p className="text-white">Copyright ©2023 All rights reserved</p>
      </div>
      <form className="flex flex-col gap-6 w-full sm:w-[40%] max-w-[300px]">
        <input
          type="email"
          placeholder="Your Email"
          className="text-white font-medium bg-transparent border-0 border-b-2 border-white outline-none px-2 pb-4"
        />
        <button className="text-white border-white border-2 bg-transparent font-medium p-2 rounded-md hover:bg-violet-700 hover:border-violet-700 transition-all">
          Subscribe
        </button>
      </form>
    </footer>
  );
};

export default Footer;
