import { PaginationApi } from "@/hooks/usePagination";
import { ArticleModel } from "@/interfaces/article.interface";

import Typography from "../Common/Typography";
import List from "../Posts/List";
import Container from "../Common/Container";

interface ListProps {
  articles?: ArticleModel[];
  totalResults?: number;
  paginationApi: PaginationApi;
  query?: string;
  selectedCategory?: string;
}

const ArticlesList: React.FC<ListProps> = ({
  articles,
  totalResults,
  paginationApi,
  query,
  selectedCategory,
}) => {
  return (
    <Container className="my-20">
      <div className="grid gap-y-6">
        <div className="flex flex-row space-x-1">
          <Typography variant="large" className="font-normal!">
            Results for:
          </Typography>
          <Typography variant="large">{query}</Typography>
        </div>
        <div>
          <List
            articles={articles}
            totalResults={totalResults}
            paginationApi={paginationApi}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </Container>
  );
};

export default ArticlesList;
