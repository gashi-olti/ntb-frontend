import React from "react";
import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";

import Layout from "@/components/Layout";
import { ArticleModel } from "@/interfaces/article.interface";
import { ResponseModel } from "@/interfaces/response.interface";
import ArticlesList from "@/components/Articles";
import usePagination from "@/hooks/usePagination";

export default function Articles() {
  const router = useRouter();
  const { q: searchQuery } = router.query;

  const paginationApi = usePagination();

  const { data, error, isLoading } = useSWRImmutable<
    ResponseModel<ArticleModel>
  >(`/articles/?q=${searchQuery}&pageSize=50`);

  const ITEMS_PER_PAGE = 9;

  const startIndex = (paginationApi.page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedArticles = data?.articles
    ?.slice(1)
    ?.slice(startIndex, endIndex);

  return (
    <Layout>
      <ArticlesList
        articles={paginatedArticles}
        totalResults={data?.totalResults}
        paginationApi={paginationApi}
        query={searchQuery as string}
      />
    </Layout>
  );
}
