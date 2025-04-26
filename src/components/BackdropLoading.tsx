import * as React from "react";
import ReactDOM from "react-dom";

import Typography from "./Common/Typography";

type Props = {
  isLoading?: boolean;
  description?: string;
  children?: React.ReactNode;
};

export default function BackdropLoading({
  isLoading = false,
  description,
  children,
}: Props) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {children}
      {isLoading &&
        mounted &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 bg-black/70 z-[999] flex flex-col justify-center items-center gap-6 backdrop-blur-xs">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-100"></div>
            <Typography variant="h5" className="text-white text-lg font-normal">
              {description ?? "Loading..."}
            </Typography>
          </div>,
          document.getElementById("backdrop-root") as HTMLElement
        )}
    </>
  );
}
