"use client"
import Link from "next/link";
import React, { useContext, useState } from "react";
import Categories from "./Categories";
import { IconContext } from "react-icons";
import {BiSolidDownArrow} from "react-icons/bi"
import Sidenav from "./Sidenav";
import {RxHamburgerMenu} from "react-icons/rx"
import { Context } from "@/contextApi/contextapi";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showCategories,setShowCategories] = useState(false)
  const [showSideNav,setShowSideNav] = useState(false)
  const {loggedIn,userName} = useContext(Context)

  const handleSideNav = () =>{
    setShowSideNav(!showSideNav)
  }

  return (
    <>
      <header className="flex justify-between px-8 items-center min-h-[50px] w-full bg-[#000000fa] text-white">
        <h1>
          <Link href="/" className="text-[20px]">
            MediaScope
          </Link>
        </h1>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/" className="hover:text-violet-500">Home</Link>
          <div onMouseEnter={()=>setShowCategories(true)}>
          <IconContext.Provider value={{className:"arrow-down-icon"}}>
            <button className="flex gap-1 items-center text-white border-0 bg-transparent hover:text-violet-500" >
              Category
              <BiSolidDownArrow />
            </button>
            </IconContext.Provider>
            {showCategories && <Categories setShowCategories={setShowCategories}/>}
          </div>
          <SearchBar />
          {loggedIn && <p className="text-violet-500 font-semibold">{userName}</p>}
          {!loggedIn && <Link href="/login" className="text-white font-medium p-1 rounded-md bg-violet-700 w-20 text-center">
            Log In
          </Link>}
        </nav>
        <IconContext.Provider value={{className:"hamburger-icon"}}>
            <RxHamburgerMenu onClick={handleSideNav}/>
          </IconContext.Provider>
        {showSideNav && <Sidenav handleSideNav={handleSideNav}/>}
      </header>
      
    </>
  );
};

export default Navbar;
