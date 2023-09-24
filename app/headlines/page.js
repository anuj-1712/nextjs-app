"use client";
import Loader from "@/components/Loader";
import NewsDetailsCard from "@/components/NewsDetailsCard";
import PrevNextbtn from "@/components/PrevNextbtn";
import React, { useEffect, useState } from "react";

const Headlines = () => {
  const [topStories, setTopStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTopStories = async () => {
        setLoading(true);
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=b4da0b9a56c94f74aa16bd9afc5f3e83`
        );
        const data = await res.json();
        setLoading(false);
        setTopStories(data.articles);
      };
    getTopStories();
  },[]);

  return (
    <section className="my-12 w-11/12 sm:w-10/12 mx-auto min-h-[900px]">
      {loading && <Loader top={40} left={50} />}
      {!loading && (
        <>
          {topStories?.length > 0 && (
            <h2 className="text-xl font-medium underline mb-6">Top Headlines</h2>
          )}
          <div className="flex flex-col gap-10 lg:gap-6">
            {topStories?.map((article, index) => {
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
        </>
      )}
    </section>
  );
};

export default Headlines;
