import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { BsDot } from "react-icons/bs";

const NewsDetailsCard = ({
  imageUrl,
  url,
  title,
  author,
  content,
  publishedAt,
}) => {
  const day = new Date(publishedAt).getDay();
  const month = new Date(publishedAt).getMonth() + 1;
  const year = new Date(publishedAt).getFullYear();
  return (
    <>
      {title !== "[Removed]" && (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-start">
          <div className="h-[400px] lg:h-[200px] w-full lg:w-[300px] shadow-md">
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2jGheLn_aLV34b2Kfqba1DwKWlyYbaN_aev3d1mH_GHZ9FZevDjSSqs0HweHifHmHfY&usqp=CAU"
              }
              className="h-full w-full object-fill"
            />
          </div>
          <div className="flex flex-col gap-3 items-start w-full lg:w-[60%]">
            <div className="flex items-center gap-1">
              <p className="text-sm text-slate-500">
                {author ? author : "anonymous"}
              </p>
              <IconContext.Provider value={{ className: "dot-icon" }}>
                <BsDot />
              </IconContext.Provider>
              <p className="text-sm text-slate-500">{`${day}/${month}/${year}`}</p>
            </div>
            <Link
              href={url}
              className="text-2xl font-bold hover:underline hover:text-violet-700 hover:cursor-pointer"
            >
              {title}
            </Link>
            <p>{`${content?.slice(0, 150)}...`}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsDetailsCard;
