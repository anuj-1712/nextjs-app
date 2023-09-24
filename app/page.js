"use client";
import NewsCard from "@/components/NewsCard";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";

export default function Home() {
  const [topStories, setTopStories] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTopStories = async () => {
    setLoading(true);
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=b4da0b9a56c94f74aa16bd9afc5f3e83&pageSize=4"
    );
    const data = await res.json();
    setLoading(false);
    setTopStories(data.articles);
  };

  const getTrending = async () => {
    setLoading(true);
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=trending&apiKey=b4da0b9a56c94f74aa16bd9afc5f3e83&pageSize=4"
    );
    const data = await res.json();
    setLoading(false);
    setTrending(data.articles);
  };

  useEffect(() => {
    getTopStories();
    getTrending();
  }, []);

  return (
    <>
      <Hero />
      <section className="w-11/12 sm:w-full max-w-[450px] sm:max-w-[1400px] mx-auto min-h-[900px]">
        {loading && <Loader top={120} left={50}/>}
        {!loading && (
          <>
            {topStories.length > 0 && (
              <p className="text-xl font-medium underline mt-8 mb-4 mx-2 sm:mx-6 md:mx-8">
                Top Stories
              </p>
            )}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 sm:mx-6 md:mx-8 w-[97%] sm:w-[95%] gap-8">
              {topStories?.map((article, index) => {
                return (
                  <NewsCard
                    key={index}
                    title={article?.title}
                    imageUrl={article?.urlToImage}
                    category={article?.source?.name}
                    url={article?.url}
                  />
                );
              })}
            </div>
            {trending.length > 0 && (
              <p className="text-xl font-medium underline mt-8 mb-4 mx-2 sm:mx-6 md:mx-8">
                Whats Trending
              </p>
            )}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 sm:mx-6 md:mx-8 w-[97%] sm:w-[95%] gap-8">
              {trending?.map((article, index) => {
                return (
                  <NewsCard
                    key={index}
                    title={article?.title}
                    imageUrl={article?.urlToImage}
                    category={article?.source?.name}
                    url={article?.url}
                  />
                );
              })}
            </div>
          </>
        )}
      </section>
    </>
  );
}
