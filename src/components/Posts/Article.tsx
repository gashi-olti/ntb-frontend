import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { ArticleModel } from "@/interfaces/article.interface";
import { timeToRead } from "@/utils/functions";

import { Card, CardContent } from "../ui/card";
import Typography from "../Common/Typography";
import { AspectRatio } from "../ui/aspect-ratio";
import { Images } from "../Images";
import CustomLink from "../CustomLink";

interface ArticleProps {
  article?: ArticleModel;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const { title, description, urlToImage, content } = article || {};

  return (
    <Card className="bg-[hsla(216,100%,96%,1)] border-0 shadow-none">
      <CardContent>
        <div className="w-full grid md:grid-cols-2 gap-8 mt-10 md:mt-0">
          <div className="w-full h-full flex flex-col items-start justify-center">
            <div className="w-full max-w-lg flex flex-col items-start space-y-6">
              {content && (
                <div className="w-[115px] hidden bg-primary px-4 py-2 text-center rounded-md md:block">
                  <Typography variant="small" className="text-white!">
                    {timeToRead(content) + " min read"}
                  </Typography>
                </div>
              )}
              <Typography variant="h2" className="mb-0">
                {title}
              </Typography>
              <Typography variant="paragraph">{description}</Typography>
              <CustomLink href={`/articles/${0}`}>
                Read more <ChevronRight />
              </CustomLink>
            </div>
          </div>
          <div className="md:p-8 md:order-first">
            <AspectRatio className="w-full max-w-[470px] h-[470px] m-auto xl:ml-[15%]">
              {urlToImage ? (
                <img
                  src={urlToImage}
                  alt="Article Thumbnail"
                  className="w-full h-full object-fit object-cover"
                />
              ) : (
                <Image
                  src={Images.NTLogoDefault}
                  alt="Logo Thumbnail"
                  className="w-full h-full object-fit object-cover"
                />
              )}
            </AspectRatio>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Article;
