import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";

import Layout from "@/components/Layout";
import SingleArticle from "@/components/Articles/SingleArticle/SingleArticle";
import { ArticleModel } from "@/interfaces/article.interface";
import BackdropLoading from "@/components/BackdropLoading";
import ErrorComponent from "@/components/ErrorComponent";

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: article,
    error,
    isLoading,
  } = useSWRImmutable<ArticleModel>(id ? "/articles/" + id : null);

  return (
    <Layout>
      <BackdropLoading isLoading={isLoading}>
        {error && !isLoading ? (
          <ErrorComponent />
        ) : (
          <SingleArticle article={article} />
        )}
      </BackdropLoading>
    </Layout>
  );
}
