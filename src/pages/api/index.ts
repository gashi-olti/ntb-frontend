import type { NextApiRequest, NextApiResponse } from "next";

import { fetchJson } from "@/lib/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { category, page, pageSize } = req.query;

    const baseUrl = process.env.API_URL;
    const url = `${baseUrl}/top-headlines?category=${category}&country=us&page=${page}&pageSize=${pageSize}&apiKey=${process.env.NEWS_API_KEY}`;

    try {
      const data = await fetchJson(url, {
        method: "GET",
      });

      return res.json(data);
    } catch (error: any) {
      const { response } = error;
      return res.status(response?.status || 500).json(error.data);
    }
  }

  return res.status(405).end();
}
