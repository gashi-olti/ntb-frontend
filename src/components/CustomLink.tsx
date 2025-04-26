import Link from "next/link";
import { ReactNode } from "react";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: () => void;
}

const CustomLink = ({
  href,
  children,
  className = "",
  target = "_self",
  onClick,
}: CustomLinkProps) => {
  const baseStyles =
    "flex flex-row space-x-2! items-center text-sm text-blue-600 font-semibold transition-colors duration-200";

  return (
    <Link
      href={href}
      className={`${baseStyles} ${className}`}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
