import React from "react";

export type MaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | false;

interface ContainerProps {
  maxWidth?: MaxWidth;
  centered?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function Container({
  maxWidth = "xl",
  centered = true,
  fullWidth = true,
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`
      w-full px-4 xl:px-0
      ${maxWidth === "sm" ? "max-w-screen-sm" : ""}
      ${maxWidth === "md" ? "max-w-screen-md" : ""}
      ${maxWidth === "lg" ? "max-w-screen-lg" : ""}
      ${maxWidth === "xl" ? "max-w-screen-xl" : ""}
      ${maxWidth === "2xl" ? "max-w-screen-2xl" : ""}
      ${centered ? "mx-auto" : ""}
      ${className ? className : ""}
    `}
      {...props}
    >
      {children}
    </div>
  );
}
