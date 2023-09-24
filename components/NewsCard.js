import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ title, imageUrl, category,url }) => {
  return (
    <>
    {title !== "[Removed]" && <Link href={url}>
      <div className="flex flex-col gap-4 shadow-lg pb-4 hover:cursor-pointer hover:text-white hover:bg-violet-700 transition-all h-[400px] ">
        <img
          src={
            imageUrl
              ? imageUrl
              : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2jGheLn_aLV34b2Kfqba1DwKWlyYbaN_aev3d1mH_GHZ9FZevDjSSqs0HweHifHmHfY&usqp=CAU`
          }
          alt=""
          className="max-h-[160px] object-fill"
        />
        <p className="underline mx-4">{category}</p>
        <p className="mx-4 font-bold text-xl">{title}</p>
      </div>
    </Link>}
    </>
  );
};

export default NewsCard;
