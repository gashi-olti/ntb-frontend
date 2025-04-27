import Head from "next/head";

import { PageMetaProps } from "@/config/pages";

type Props = {
  meta?: PageMetaProps;
};

export default function MetaHead({ meta }: React.PropsWithChildren<Props>) {
  return (
    <Head>
      <title>{meta?.title || "native-teams-blogs.com"}</title>
      <meta property="og:title" content={meta?.title} />
      <meta name="description" content={meta?.description} />
      <meta property="og:description" content={meta?.description} />
      <meta property="keywords" content={meta?.keywords} />
    </Head>
  );
}
