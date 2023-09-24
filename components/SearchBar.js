import { Context } from "@/contextApi/contextapi";
import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

const SearchBar = ({width}) => {
  const {query,setQuery} = useContext(Context)
  const router = useRouter()

  const handleSearchQuery = () =>{
    router.push(`/search/${query}`)
    setQuery("")
  }
  return (
    <div className={`flex gap-2 items-center w-[${width}%]`}>
      <input
        type="search"
        placeholder="Search..."
        className="outline-none bg-transparent text-white pb-2 border-b-2 border-white w-full"
        onChange={(e)=>setQuery(e.target.value)}
        value={query}
      />
      <IconContext.Provider value={{className:"search-icon"}}>
        <AiOutlineSearch onClick={handleSearchQuery}/>
      </IconContext.Provider>
    </div>
  );
};

export default SearchBar;
