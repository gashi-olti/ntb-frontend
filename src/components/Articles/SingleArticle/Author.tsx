import Typography from "@/components/Common/Typography";
import { Images } from "@/components/Images";
import Image from "next/image";

interface AuthorProps {
  author: string;
}

const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <div className="bg-[#1E1B4B] rounded-2xl p-8 relative mt-8">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-16 rounded-full overflow-hidden border-l-4 border-b-4 border-primary">
          <Image
            src={Images.NTLogoDefault}
            alt={author || "Author"}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center py-8">
        <Typography variant="h2" className="text-white">
          {author || "Author"}
        </Typography>
        <Typography variant="muted" className="uppercase text-white/80">
          AUTHOR
        </Typography>
        <Typography
          variant="paragraph"
          className="text-white/90 mt-4 max-w-2xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
    </div>
  );
};

export default Author;
