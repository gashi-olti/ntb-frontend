import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { ArticleModel } from "@/interfaces/article.interface";
import { timeToRead } from "@/utils/functions";
import { PaginationApi } from "@/hooks/usePagination";

import Typography from "../Common/Typography";
import { Card, CardContent, CardHeader } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import CustomLink from "../CustomLink";
import CustomPagination from "../Common/CustomPagination";
import { Images } from "../Images";

interface ListProps {
  articles?: ArticleModel[];
  paginationApi: PaginationApi;
  totalResults?: number;
  title?: string;
  selectedCategory?: string;
}

const List: React.FC<ListProps> = ({
  articles,
  paginationApi,
  totalResults,
  title,
  selectedCategory,
}) => {
  return (
    <div className="grid gap-y-4">
      {title && (
        <div>
          <Typography variant="h2">{title}</Typography>
        </div>
      )}
      <div>
        <div className="grid grid-cols-12 gap-4">
          {articles?.map((article, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 md:col-span-4"
            >
              <Card
                key={index}
                className="py-0 gap-0 shadow-none relative transition-all duration-300 hover:border-l-4 hover:border-b-4 hover:border-l-primary hover:border-b-primary hover:-ml-[4px] hover:-mb-[4px]"
              >
                <CardHeader className="p-0 gap-0">
                  <div className="h-[200px] overflow-hidden">
                    <AspectRatio ratio={4 / 3} className="h-full">
                      {!!article?.urlToImage ? (
                        <img
                          src={article?.urlToImage}
                          alt="Article Image"
                          className="object-fit object-cover rounded-t-lg"
                        />
                      ) : (
                        <Image
                          src={Images.NTLogoDefault}
                          fill
                          alt="Native Teams Logo"
                        />
                      )}
                    </AspectRatio>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col h-[150px] px-0!">
                  {article?.content && (
                    <div className="w-[116px] bg-primary py-2 text-center rounded-r-lg -mt-5 z-50">
                      <Typography className="text-white!">
                        {timeToRead(article?.content || "") + " min read"}
                      </Typography>
                    </div>
                  )}
                  <div className="w-full flex flex-col items-start space-y-2 p-4">
                    <Typography
                      variant="h3"
                      className="line-clamp-2 min-h-[3rem]"
                    >
                      {article?.title}
                    </Typography>
                    <CustomLink href={`/articles/${index}`}>
                      Read more <ChevronRight />
                    </CustomLink>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div>
        <CustomPagination
          paginationApi={paginationApi}
          totalResults={totalResults}
        />
      </div>
    </div>
  );
};

export default List;
