import Image from "next/image";
import Typography from "../Common/Typography";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Images } from "../Images";
import Form from "./Form";

interface NewsLetter {}

const NewsLetter: React.FC<NewsLetter> = () => {
  return (
    <div className="w-full relative px-4 py-28 bg-[hsla(240,62%,10%,1)]">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-8">
        <Typography
          variant="h1"
          className="text-white w-fit font-bold text-center"
        >
          Never miss out our
          <span className="text-primary ml-2">latest news</span>
        </Typography>
        <div className="w-full max-w-lg">
          <Form />
        </div>
        <Typography className="text-center text-white">
          By submitting this form, you will receive emails from Native Teams.
          <br />
          For details, view our Privacy Policy.
        </Typography>
      </div>
      <div className="hidden absolute md:w-24 md:h-24 md:block md:bottom-[15%] md:right-[10%] lg:right-[20%]">
        <Image src={Images.LoadingIcon} fill alt="Native Teams Logo" />
      </div>
    </div>
  );
};

export default NewsLetter;
