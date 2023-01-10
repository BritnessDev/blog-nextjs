// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import BlogData from "./blog.json";
import { Data } from "../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let result = [];
  const { body } = req;
  const { page, categoryId, keyword } = body;
  // search the blog which contain the categoryId in category array
  if (categoryId != -1)
    result = BlogData.posts.filter((post) =>
      post.categories.includes(categoryId)
    );
  else result = BlogData.posts;
  // search the blog which contain the keyword in title
  result = result.filter((post) => post.title.includes(keyword));
  const totalPages = Math.ceil(result.length / 3);
  res.status(200).json({
    result: result.slice(3 * (page - 1), 3 * page),
    totalPages,
    pageNum: page,
  });
}
