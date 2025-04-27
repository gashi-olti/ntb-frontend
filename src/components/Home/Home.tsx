import React from "react";
import useSWRImmutable from "swr/immutable";

import Posts from "../Posts";
import Explore from "./Explore";
import Hero from "./Hero";
import NewsLetter from "../NewsLetter";
import { ResponseModel } from "@/interfaces/response.interface";
import { ArticleModel } from "@/interfaces/article.interface";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>("general");

  const { data, error, isLoading } = useSWRImmutable<
    ResponseModel<ArticleModel>
  >(`?category=${selectedCategory}&pageSize=50`);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full grid mt-20">
      <div>
        <Hero articles={data?.articles || []} />
      </div>
      <div>
        <Posts
          data={data}
          error={error}
          isLoading={isLoading}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
}
