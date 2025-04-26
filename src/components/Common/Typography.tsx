import React from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "paragraph"
  | "large"
  | "small"
  | "muted";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
}

const Typography = ({
  variant = "paragraph",
  className = "",
  ...props
}: TypographyProps) => {
  const variantStyles = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    h5: "scroll-m-20 text-lg font-semibold tracking-tight",
    h6: "scroll-m-20 text-base font-semibold tracking-tight",
    paragraph: "font-normal",
    large: "text-lg font-semibold",
    small: "text-sm font-normal leading-none",
    muted: "text-sm font-normal text-muted-foreground",
  };

  const Component = React.createElement(
    {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      paragraph: "p",
      large: "span",
      small: "span",
      muted: "span",
    }[variant],
    {
      className: `text-[hsla(0,0%,12%,1)] ${
        variantStyles[variant as keyof typeof variantStyles]
      } ${className}`,
      ...props,
    }
  );

  return Component;
};

export default Typography;
