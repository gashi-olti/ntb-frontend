import React from "react";
import useSWRImmutable from "swr/immutable";

import Container from "../Common/Container";
import Categories from "./Categories";
import Article from "./Article";
import List from "./List";
import { ArticleModel } from "@/interfaces/article.interface";
import { ResponseModel } from "@/interfaces/response.interface";
import ErrorComponent from "../ErrorComponent";
import BackdropLoading from "../BackdropLoading";
import usePagination from "@/hooks/usePagination";

interface PostsProps {
  data: ResponseModel<ArticleModel> | undefined;
  error: any;
  isLoading?: boolean;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function Posts({
  data,
  error,
  isLoading,
  selectedCategory,
  onCategoryChange,
}: PostsProps) {
  const paginationApi = usePagination();

  const ITEMS_PER_PAGE = 9;

  const startIndex = (paginationApi.page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedArticles = data?.articles
    ?.slice(1)
    ?.slice(startIndex, endIndex);

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <BackdropLoading isLoading={isLoading} description="Loading articles...">
      <Container>
        <div className="w-full grid gap-y-8 py-16 md:py-16">
          <div>
            <Categories
              selectedCategory={selectedCategory}
              onCategoryChange={onCategoryChange}
            />
          </div>
          <div>
            <Article article={data?.articles?.[0]} />
          </div>
          <div>
            <List
              title="News posts"
              articles={paginatedArticles}
              paginationApi={paginationApi}
              totalResults={(data?.articles?.length || 0) - 1}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </Container>
    </BackdropLoading>
  );
}
