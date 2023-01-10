// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import BlogData from "./blog.json";
import { CategoryData } from "../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoryData>
) {
  res.status(200).json({
    categories: BlogData.categories,
    blogExist: BlogData.posts.length != 0,
  });
}
