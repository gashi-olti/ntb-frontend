import Image from "next/image";
import { Images } from "../Images";
import Typography from "../Common/Typography";
import { Button } from "../ui/button";

interface ExploreProps {
  className?: string;
  variant?: "light" | "dark";
}

const Explore: React.FC<ExploreProps> = ({ className, variant = "light" }) => {
  const bgColor =
    variant === "light"
      ? "bg-[hsla(216,100%,96%,1)]"
      : "bg-[hsla(240,62%,10%,1)]";

  const textColor = variant === "light" ? "text-black" : "text-gray-200";

  return (
    <div
      className={`w-full relative overflow-hidden px-4 py-28 ${bgColor} ${
        className ?? ""
      }`}
    >
      <div className="hidden md:block overflow-hidden absolute left-0 top-0">
        <Image
          src={Images.NTLogoWhite}
          width={400}
          height={400}
          alt="Native Teams Logo"
        />
      </div>
      <div
        className={`flex flex-col items-center space-y-6 max-w-2xl mx-auto text-center ${textColor}`}
      >
        <Typography variant="h1" className={textColor}>
          Explore Native Teams today
        </Typography>
        <Typography variant="paragraph" className={textColor}>
          Unlock the full potential of your teams and elevate your business or
          personal growth with Native Teams. Explore our platform today and
          start your journey towards success.
        </Typography>
        <Button className="w-[176px] h-[49px] rounded-full" size="lg">
          Learn more
        </Button>
      </div>
      <div className="w-10 h-10 overflow-hidden absolute top-[5%] right-[10%] md:w-16 md:h-16 md:top-[15%] md:right-[20%]">
        <Image src={Images.LoadingIcon} fill alt="Native Teams Logo" />
      </div>
    </div>
  );
};

export default Explore;
