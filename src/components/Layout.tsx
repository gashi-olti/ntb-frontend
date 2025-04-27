import { PageMetaProps } from "@/config/pages";

import Footer from "./Footer";
import Header from "./Header";
import MetaHead from "./MetaHead";

interface LayoutProps {
  children: React.ReactNode;
  meta?: PageMetaProps;
}

export default function Layout({ children, meta }: LayoutProps) {
  return (
    <div className="w-full bg-background relative flex min-h-svh flex-1 flex-col">
      <MetaHead meta={meta} />
      <Header />
      <div className="min-h-min flex flex-1 p-0">{children}</div>
      <Footer />
    </div>
  );
}
