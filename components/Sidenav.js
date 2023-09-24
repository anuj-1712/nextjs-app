"use client";
import Link from "next/link";
import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { Context } from "@/contextApi/contextapi";

const Sidenav = ({ handleSideNav }) => {
  const {loggedIn,userName} = useContext(Context)
  const categories = ["Sports", "Business", "Technology"];
  return (
    <div className="flex md:hidden flex-col gap-5 px-4 py-8 w-full md:w-1/4 md:min-w-[250px] bg-[#262A56] transition-all text-white fixed right-0 top-[50px]">
      <SearchBar width={100}/>
      <Link href="/" className="hover:text-violet-700" onClick={handleSideNav}>
        Home
      </Link>
      {categories.map((category, index) => {
        return (
          <Link
            key={index}
            href={`/categories/${category.toLowerCase()}`}
            className=" hover:underline hover:text-violet-700"
            onClick={handleSideNav}
          >
            {category}
          </Link>
        );
      })}
      {loggedIn && <p className="text-white font-semibold">{userName}</p>}
      {!loggedIn && <Link
        className="text-white font-medium p-1 rounded-md bg-violet-700 text-center"
        href="/signin"
        onClick={handleSideNav}
      >
        Log In
      </Link>}
    </div>
  );
};

export default Sidenav;
