import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageInterface, post, Category } from "../types";
const myLoader = ({ src, width, quality }: ImageInterface) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const BlogCard = ({
  post,
  categoryList,
}: {
  post: post;
  categoryList: Category[];
}) => {
  let categoryName: string[] = [];
  if (categoryList)
    post.categories.map((value) => {
      categoryList.map((item) => {
        if (item.id == value) categoryName.push(item.name);
      });
    });

  const [src, setSrc] = useState(post.imageUrl);

  useEffect(() => {
    setSrc(post.imageUrl);
  }, [post.imageUrl]);

  return (
    <div className="lg:w-1/3 w-full relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl duration-500 cursor-pointer">
      <Image
        loader={myLoader}
        className="rounded-t-lg w-full h-auto"
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        alt={src}
        onError={() => setSrc("https://picsum.photos/id/244/800/600")} // display standard image on error
      />
      <div className="p-5">
        <div className="flex gap-2">
          {categoryName.map((item, key) => (
            <div
              className="text-sm px-2 py-1 rounded-md bg-gray-200 w-fit text-blue-600 text-bold cursor-pointer  gap-3"
              key={key}
            >
              {item}
            </div>
          ))}
        </div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};
