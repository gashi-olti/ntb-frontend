import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverRuntimeConfig: {
    baseUrl: process.env.API_URL,
  },
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
  },
  images: {
    domains: ["dims.apnews.com"],
  },
};

export default nextConfig;
