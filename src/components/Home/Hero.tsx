import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import { ArticleModel } from "@/interfaces/article.interface";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Images } from "../Images";

interface HeroProps {
  articles?: ArticleModel[];
}

const Hero: React.FC<HeroProps> = ({ articles }) => {
  const [value, setValue] = React.useState<string>();
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <div className="w-full max-w-screen-lg relative mx-auto flex flex-col gap-y-5 px-4">
      <div className="absolute left-[10%] top-[-5%] lg:left-[1%]">
        <Image
          src={Images.LoveIcon}
          alt="Like Blogs"
          width={isDesktop ? 62 : 42}
          height={isDesktop ? 60 : 41}
        />
      </div>
      <h2 className="text-primary text-xl md:text-3xl font-bold text-center">
        Native Teams Blog
      </h2>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[hsla(0, 0%, 12%, 1)]">
        Resources, Tips and Tricks About the Modern Way of Working
      </h1>
      <div className="w-full max-w-xl mx-auto flex flex-col gap-y-4 items-center rounded-full mt-6 md:flex-row md:bg-gray-100">
        <Input
          placeholder="Search for posts"
          className="h-[49px] bg-gray-100 rounded-full border-0 shadow-none focus-visible:ring-0 pl-6"
          value={value}
          onChange={handleChange}
        />
        <Button
          size="lg"
          className="w-full rounded-full md:w-[143px] h-[49px]"
          onClick={() => router.push("/articles?q=" + value)}
          disabled={!value}
        >
          Search
        </Button>
      </div>
      <div className="absolute right-[10%] top-[50%] sm:top-[1%] md:top-[-15%]">
        <Image
          src={Images.LoadingIcon}
          alt="Loading circle"
          width={29}
          height={29}
        />
      </div>
      <div className="hidden md:block absolute left-[10%] bottom-[25%]">
        <Image
          src={Images.LoadingIcon}
          alt="Loading circle"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Hero;
