import Image from "next/image";

import { Images } from "../Images";
import Navigation from "./Navigation";
import MenuDrawer from "./MenuDrawer";
import Container from "../Common/Container";
import CustomLink from "../CustomLink";

export default function Header() {
  return (
    <div className="w-full px-5 py-5 md:py-6">
      <Container className="grid grid-cols-3">
        <div className="flex flex-row items-center">
          <CustomLink href="/">
            <Image
              width={158}
              height={29}
              src={Images.BlackLogo}
              alt="Native Teams"
            />
          </CustomLink>
        </div>
        <div className="flex flex-row justify-center">
          <Navigation />
        </div>
        <div className="flex justify-end">
          <MenuDrawer />
        </div>
      </Container>
    </div>
  );
}
