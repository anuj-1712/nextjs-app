"use client";
import Loader from "@/components/Loader";
import NewsDetailsCard from "@/components/NewsDetailsCard";
import PrevNextbtn from "@/components/PrevNextbtn";
import React, { useEffect, useState } from "react";

const Search = ({ params: { query } }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pageNo,setPageNo] = useState(1)
  const [totalResults,setTotalResults] = useState() 
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=b4da0b9a56c94f74aa16bd9afc5f3e83&pageSize=20&page=${pageNo}`
      );
      const data = await res.json();
      setLoading(false);
      setData(data.articles);
      setTotalResults(data.totalResults)
    };
    getData();
  }, [query,pageNo]);
  return (
    <section className="my-12 w-11/12 sm:w-10/12 mx-auto min-h-[900px]">
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="flex flex-col gap-10 lg:gap-6">
            {data?.map((article, index) => {
              return (
                <NewsDetailsCard
                  key={index}
                  author={article?.author}
                  url={article?.url}
                  title={article?.title}
                  imageUrl={article?.urlToImage}
                  publishedAt={article?.publishedAt}
                  content={article?.content}
                />
              );
            })}
          </div>
          {data?.length > 0 && <PrevNextbtn setPageNo={setPageNo} pageNo={pageNo} totalResults={totalResults}/>}
        </>
      )}
    </section>
  );
};

export default Search;
