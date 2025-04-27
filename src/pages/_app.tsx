import "@/styles/globals.css";
import "@/styles/fonts.css";

import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

import Api from "@/lib/api";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: Api.get }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
