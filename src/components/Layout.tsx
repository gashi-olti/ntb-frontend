import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full bg-background relative flex min-h-svh flex-1 flex-col">
      <Header />
      <div className="min-h-min flex flex-1 p-0">{children}</div>
      <Footer />
    </div>
  );
}
