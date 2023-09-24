"use client";
import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName,setUserName] = useState("")
  const [query,setQuery] = useState("")
  return (
    <Context.Provider value={{ loggedIn, setLoggedIn,userName,setUserName,query,setQuery }}>
      {props.children}
    </Context.Provider>
  );
};
