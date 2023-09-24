import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#191825",
        backgroundBlendMode: "multiply",
      }}
      className="h-[500px] w-full px-4 flex sm:justify-center items-center"
    >
      <div className="flex flex-col sm:items-center gap-4">
        <h3 className=" text-violet-700 text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Feeling clueless between your group talks?
        </h3>
        <p className="text-white md:text-xl lg:text-2xl font-bold">{`Don't Worry we got your back`}</p>
        <Link
          href="/headlines"
          className="text-white border-2 border-white rounded-md font-medium text-[16px] lg:text-xl p-2 text-center w-40 lg:w-56 hover:border-violet-700 hover:bg-violet-700 transition-all"
        >
          Top HeadLines
        </Link>
      </div>
    </div>
  );
};

export default Hero;
