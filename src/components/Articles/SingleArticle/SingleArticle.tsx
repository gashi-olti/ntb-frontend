import BackdropLoading from "@/components/BackdropLoading";
import Container from "@/components/Common/Container";
import ErrorComponent from "@/components/ErrorComponent";
import { ArticleModel } from "@/interfaces/article.interface";
import useSWRImmutable from "swr/immutable";
import BreadcrumbArtist from "./BreadcrumbArtist";
import Typography from "@/components/Common/Typography";
import { Separator } from "@/components/ui/separator";
import { cleanContent, timeToRead } from "@/utils/functions";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Images } from "@/components/Images";
import Author from "./Author";
import Explore from "@/components/Home/Explore";

interface SingleArticleProps {
  article?: ArticleModel;
}

const SingleArticle: React.FC<SingleArticleProps> = ({ article }) => {
  const formattedDate = article?.publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(article.publishedAt))
    : "";

  return (
    <div className="w-full grid">
      <div>
        <Container className="mt-10 mb-30">
          <div className="grid gap-y-10">
            {article?.title && (
              <div>
                <BreadcrumbArtist title={article?.title} />
              </div>
            )}
            <div className="flex flex-col space-y-8">
              <Typography
                variant="h1"
                className="max-w-6xl mx-auto text-center"
              >
                {article?.title}
              </Typography>
              <div className="flex flex-row justify-center items-center space-x-2">
                <Typography variant="muted">{formattedDate}</Typography>
                <Separator orientation="vertical" />
                <Typography variant="muted">
                  {timeToRead(article?.content || "") + " min read"}
                </Typography>
              </div>
            </div>
            <div className="flex items-center justify-center bg-red-100">
              <AspectRatio ratio={16 / 9} className="w-full">
                {article?.urlToImage ? (
                  <img
                    src={article?.urlToImage}
                    alt={article?.title ?? "Image"}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    alt="Native Teams Logo"
                    src={Images.NTLogoDefault}
                    fill
                  />
                )}
              </AspectRatio>
            </div>
            <div className="flex flex-col space-y-4">
              <Typography variant="h3">{article?.description}</Typography>
              <Typography variant="paragraph">
                {article?.content
                  ? cleanContent(article.content)
                  : "Lorem ipsum..."}
              </Typography>
            </div>
            <div className="flex flex-col space-y-4">
              <Typography variant="h3">To wrap up</Typography>
              <Typography variant="paragraph">
                Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Metus aliquam eleifend mi in
                nulla posuere sollicitudin aliquam ultrices. Ornare quam viverra
                orci sagittis eu volutpat odio. Fermentum odio eu feugiat
                pretium nibh ipsum consequat. Aliquam ultrices sagittis orci a
                scelerisque purus semper. Ut lectus arcu bibendum at.etur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ornare quam viverra orci sagittis eu
                volutpat odio. Fermentum odio eu feugiat pretium nibh ipsum
                consequat. Aliquam ultrices sagittis orci a scelerisque purus
                semper. Ut lectus arcu bibendum at.etur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
            <div>
              <Author author={article?.author ?? ""} />
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Explore variant="dark" />
      </div>
    </div>
  );
};

export default SingleArticle;
