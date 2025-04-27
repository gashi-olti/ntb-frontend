export interface PageMetaProps {
  title: string;
  description?: string;
  keywords?: string;
}

export const pageMetaProps: { [key: string]: PageMetaProps } = {
  home: {
    title: "Native Teams - Home",
    description: "Native Teams Blogs",
    keywords: "native teams, blogs",
  },
  articles: {
    title: "Native Teams - Articles",
    description: "Native Teams Articles",
    keywords: "native teams, articles, blogs",
  },
};
