export type GtagEventType = {
  action: string;
  category: string;
  label: string;
  value: string;
};

export type Data = {
  result: post[];
  totalPages: number;
  pageNum: number;
};

export type post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: number[];
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};
export type CategoryData = {
  categories: Category[];
  blogExist: boolean;
};

export type ImageInterface = {
  src: string;
  width: number;
  quality?: number;
};

export interface ICategoryList {
  categoryList: Category[];
  keyword: string;
  setKeyword: (e: string) => void;
  categoryId: number;
  setCategoryId: (e: number) => void;
}

export interface IPagination {
  page: number;
  setPage: (e: number) => void;
  totalPage: number;
}
