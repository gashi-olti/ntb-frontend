import type { NextApiRequest, NextApiResponse } from "next";
import { fetchJson } from "@/lib/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const baseUrl = process.env.API_URL;
    const url = `${baseUrl}/top-headlines?country=us&pageSize=50&apiKey=${process.env.NEWS_API_KEY}`;

    try {
      const data = await fetchJson(url, {
        method: "GET",
      });

      const article = data.articles[parseInt(id as string)];

      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }

      return res.json(article);
    } catch (error: any) {
      const { response } = error;
      return res.status(response?.status || 500).json(error.data);
    }
  }

  return res.status(405).end();
}
